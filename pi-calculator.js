// PI Calculator using Chudnovsky Algorithm
// This algorithm provides ~14 digits per iteration

class PICalculator {
    constructor() {
        this.isCalculating = false;
        this.shouldStop = false;
        this.startTime = 0;
        this.piValue = '';
        this.worker = null;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.createParticles();
    }

    initializeElements() {
        this.startBtn = document.getElementById('start-calculation');
        this.stopBtn = document.getElementById('stop-calculation');
        this.copyBtn = document.getElementById('copy-pi');
        this.iterationsInput = document.getElementById('iterations');
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
        const delay = parseInt(this.delayInput.value);

        if (isNaN(iterations) || iterations < 1) {
            this.showStatus('Bitte geben Sie eine gültige Anzahl von Iterationen ein!', 'error');
            return;
        }

        this.isCalculating = true;
        this.shouldStop = false;
        this.startTime = Date.now();
        
        this.startBtn.disabled = true;
        this.stopBtn.disabled = false;
        this.copyBtn.disabled = true;
        this.iterationsInput.disabled = true;
        this.delayInput.disabled = true;

        this.showStatus('Berechnung läuft...', 'calculating');
        this.progressContainer.classList.add('show');
        this.updateProgress(0);

        // Initialize display
        this.piDisplay.innerHTML = '<span class="pi-integer">3</span><span class="pi-decimals">.</span>';

        try {
            await this.calculateWithWorker(iterations, delay);
        } catch (error) {
            this.showStatus('Fehler bei der Berechnung: ' + error.message, 'error');
            console.error(error);
        }

        this.isCalculating = false;
        this.startBtn.disabled = false;
        this.stopBtn.disabled = true;
        this.iterationsInput.disabled = false;
        this.delayInput.disabled = false;
    }

    stopCalculation() {
        this.shouldStop = true;
        this.stopBtn.disabled = true;
        
        // Terminate the worker
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
        
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

    calculateWithWorker(iterations, delay) {
        return new Promise((resolve, reject) => {
            // Create a new worker
            this.worker = new Worker('pi-calculator-worker.js');
            
            // Handle messages from the worker
            this.worker.onmessage = (e) => {
                const { type, piValue, decimalPlaces, iteration, progress, message } = e.data;
                
                if (type === 'progress') {
                    this.displayPi(piValue);
                    this.updateStats(iteration, decimalPlaces);
                    this.updateProgress(progress);
                } else if (type === 'complete') {
                    this.displayPi(piValue);
                    this.updateStats(iteration, decimalPlaces);
                    this.updateProgress(100);
                    this.showStatus('✓ Berechnung abgeschlossen!', 'completed');
                    this.copyBtn.disabled = false;
                    this.progressContainer.classList.remove('show');
                    this.worker.terminate();
                    this.worker = null;
                    resolve();
                } else if (type === 'error') {
                    this.showStatus('Fehler: ' + message, 'error');
                    this.progressContainer.classList.remove('show');
                    this.worker.terminate();
                    this.worker = null;
                    reject(new Error(message));
                }
            };
            
            // Handle worker errors
            this.worker.onerror = (error) => {
                this.showStatus('Worker-Fehler: ' + error.message, 'error');
                this.progressContainer.classList.remove('show');
                console.error('Worker error:', error);
                this.worker = null;
                reject(error);
            };
            
            // Start the calculation
            this.worker.postMessage({ iterations, delay });
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
