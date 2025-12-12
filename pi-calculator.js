// PI Calculator using Chudnovsky Algorithm
// This algorithm provides ~14 digits per iteration

class PICalculator {
    constructor() {
        this.isCalculating = false;
        this.shouldStop = false;
        this.startTime = 0;
        this.piValue = '';
        this.workers = [];
        this.workerResults = [];
        
        this.initializeElements();
        this.initializeEventListeners();
        this.createParticles();
    }

    initializeElements() {
        this.startBtn = document.getElementById('start-calculation');
        this.stopBtn = document.getElementById('stop-calculation');
        this.copyBtn = document.getElementById('copy-pi');
        this.iterationsInput = document.getElementById('iterations');
        this.threadsInput = document.getElementById('threads');
        this.useGpuCheckbox = document.getElementById('use-gpu');
        this.delayInput = document.getElementById('delay');
        this.piDisplay = document.getElementById('pi-display');
        this.currentIterationDisplay = document.getElementById('current-iteration');
        this.decimalPlacesDisplay = document.getElementById('decimal-places');
        this.calculationTimeDisplay = document.getElementById('calculation-time');
        this.statusDisplay = document.getElementById('calculation-status');
        this.progressContainer = document.getElementById('progress-container');
        this.progressBar = document.getElementById('progress-bar');
        this.progressText = document.getElementById('progress-text');
    }

    initializeEventListeners() {
        this.startBtn.addEventListener('click', () => this.startCalculation());
        this.stopBtn.addEventListener('click', () => this.stopCalculation());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
    }

    createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
            particlesContainer.appendChild(particle);
        }
    }

    async startCalculation() {
        if (this.isCalculating) return;

        const iterations = parseInt(this.iterationsInput.value);
        const threads = parseInt(this.threadsInput.value);
        const delay = parseInt(this.delayInput.value);
        const useGpu = this.useGpuCheckbox.checked;

        if (isNaN(iterations) || iterations < 1) {
            this.showStatus('Bitte geben Sie eine gültige Anzahl von Iterationen ein!', 'error');
            return;
        }

        if (isNaN(threads) || threads < 1 || threads > 32) {
            this.showStatus('Bitte geben Sie eine gültige Anzahl von Threads ein (1-32)!', 'error');
            return;
        }

        this.isCalculating = true;
        this.shouldStop = false;
        this.startTime = Date.now();
        
        this.startBtn.disabled = true;
        this.stopBtn.disabled = false;
        this.copyBtn.disabled = true;
        this.iterationsInput.disabled = true;
        this.threadsInput.disabled = true;
        this.useGpuCheckbox.disabled = true;
        this.delayInput.disabled = true;

        const gpuText = useGpu ? ' + GPU' : '';
        this.showStatus(`Berechnung läuft mit ${threads} Thread(s)${gpuText}...`, 'calculating');
        this.progressContainer.classList.add('show');
        this.updateProgress(0);

        // Initialize display
        this.piDisplay.innerHTML = '<span class="pi-integer">3</span><span class="pi-decimals">.</span>';

        try {
            await this.calculateWithWorkers(iterations, threads, delay, useGpu);
        } catch (error) {
            this.showStatus('Fehler bei der Berechnung: ' + error.message, 'error');
            console.error(error);
        }

        this.isCalculating = false;
        this.startBtn.disabled = false;
        this.stopBtn.disabled = true;
        this.iterationsInput.disabled = false;
        this.threadsInput.disabled = false;
        this.useGpuCheckbox.disabled = false;
        this.delayInput.disabled = false;
    }

    stopCalculation() {
        this.shouldStop = true;
        this.stopBtn.disabled = true;
        
        // Terminate all workers
        this.workers.forEach(worker => {
            if (worker) {
                worker.terminate();
            }
        });
        this.workers = [];
        this.workerResults = [];
        
        this.showStatus('Berechnung gestoppt', 'calculating');
        this.progressContainer.classList.remove('show');
    }

    showStatus(message, type) {
        this.statusDisplay.textContent = message;
        this.statusDisplay.className = `calculation-status show ${type}`;
    }

    updateStats(iteration, decimalPlaces) {
        this.currentIterationDisplay.textContent = iteration;
        this.decimalPlacesDisplay.textContent = decimalPlaces;
        
        const elapsedTime = ((Date.now() - this.startTime) / 1000).toFixed(2);
        this.calculationTimeDisplay.textContent = `${elapsedTime}s`;
    }

    updateProgress(percentage) {
        const rounded = Math.min(100, Math.max(0, percentage)).toFixed(1);
        this.progressBar.style.width = rounded + '%';
        this.progressText.textContent = rounded + '%';
    }

    calculateWithWorkers(iterations, numThreads, delay, useGpu = false) {
        return new Promise((resolve, reject) => {
            // Calculate iterations per worker
            const iterationsPerWorker = Math.ceil(iterations / numThreads);
            const actualThreads = Math.min(numThreads, iterations);
            
            this.workers = [];
            this.workerResults = new Array(actualThreads);
            let completedWorkers = 0;
            const workerProgress = new Array(actualThreads).fill(0);
            let highestIterationDisplayed = 0;
            let highestDecimalPlacesDisplayed = 0;
            
            // Create workers
            for (let i = 0; i < actualThreads; i++) {
                const worker = new Worker('pi-calculator-worker.js');
                const workerId = i;
                
                // Calculate iteration range for this worker
                const startIteration = i * iterationsPerWorker + 1;
                const endIteration = Math.min((i + 1) * iterationsPerWorker, iterations);
                const workerIterations = endIteration - startIteration + 1;
                
                // Handle messages from the worker
                worker.onmessage = (e) => {
                    const { type, piValue, decimalPlaces, iteration, progress, message } = e.data;
                    
                    if (type === 'progress') {
                        workerProgress[workerId] = progress;
                        
                        // Calculate overall progress
                        const totalProgress = workerProgress.reduce((sum, p) => sum + p, 0) / actualThreads;
                        this.updateProgress(totalProgress);
                        
                        // Only update display if this iteration is higher than what we've shown
                        if (iteration > highestIterationDisplayed) {
                            highestIterationDisplayed = iteration;
                            highestDecimalPlacesDisplayed = Math.max(highestDecimalPlacesDisplayed, decimalPlaces);
                            this.updateStats(iteration, highestDecimalPlacesDisplayed);
                        }
                    } else if (type === 'complete') {
                        this.workerResults[workerId] = { piValue, decimalPlaces, iteration: endIteration };
                        completedWorkers++;
                        workerProgress[workerId] = 100;
                        
                        // Check if all workers are done
                        if (completedWorkers === actualThreads) {
                            // Use the result from the worker with the highest iteration count
                            const bestResult = this.workerResults.reduce((best, current) => {
                                return current.iteration > best.iteration ? current : best;
                            });
                            
                            this.displayPi(bestResult.piValue);
                            this.updateStats(iterations, bestResult.decimalPlaces);
                            this.updateProgress(100);
                            this.showStatus('✓ Berechnung abgeschlossen!', 'completed');
                            this.copyBtn.disabled = false;
                            this.progressContainer.classList.remove('show');
                            
                            // Terminate all workers
                            this.workers.forEach(w => w.terminate());
                            this.workers = [];
                            resolve();
                        }
                    } else if (type === 'error') {
                        this.showStatus('Fehler: ' + message, 'error');
                        this.progressContainer.classList.remove('show');
                        this.workers.forEach(w => w.terminate());
                        this.workers = [];
                        reject(new Error(message));
                    }
                };
                
                // Handle worker errors
                worker.onerror = (error) => {
                    this.showStatus('Worker-Fehler: ' + error.message, 'error');
                    this.progressContainer.classList.remove('show');
                    console.error('Worker error:', error);
                    this.workers.forEach(w => w.terminate());
                    this.workers = [];
                    reject(error);
                };
                
                this.workers.push(worker);
                
                // Start the calculation with this worker's range
                worker.postMessage({ 
                    iterations: workerIterations,
                    delay: delay,
                    startIteration: startIteration,
                    useGpu: useGpu
                });
            }
        });
    }



    displayPi(piString) {
        // Store for copying
        this.piValue = piString;
        
        // Format PI for display
        const parts = piString.split('.');
        const intPart = parts[0];
        const decPart = parts[1] || '';
        
        // Group digits in sets of 10 for readability
        let formattedDec = '';
        for (let i = 0; i < decPart.length; i += 10) {
            if (i > 0) formattedDec += ' ';
            formattedDec += decPart.substr(i, 10);
        }
        
        this.piDisplay.innerHTML = `
            <span class="pi-integer">${intPart}</span><span class="pi-decimals">.${formattedDec}</span>
        `;
    }

    async copyToClipboard() {
        try {
            await navigator.clipboard.writeText(this.piValue);
            const originalText = this.copyBtn.textContent;
            this.copyBtn.textContent = '✓ Kopiert!';
            this.copyBtn.style.background = 'var(--success-color)';
            
            setTimeout(() => {
                this.copyBtn.textContent = originalText;
                this.copyBtn.style.background = '';
            }, 2000);
        } catch (error) {
            this.showStatus('Fehler beim Kopieren in die Zwischenablage', 'error');
        }
    }


}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PICalculator();
});
