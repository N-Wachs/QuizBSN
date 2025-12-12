// PI Calculator using Machin's Formula
// This algorithm provides approximately 1.4 digits per iteration

class PICalculator {
    constructor() {
        this.isCalculating = false;
        this.shouldStop = false;
        this.startTime = 0;
        this.piValue = '';
        
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

        // Initialize display
        this.piDisplay.innerHTML = '<span class="pi-integer">3</span><span class="pi-decimals">.</span>';

        try {
            await this.calculatePiChudnovsky(iterations, delay);
            
            if (!this.shouldStop) {
                this.showStatus('✓ Berechnung abgeschlossen!', 'completed');
                this.copyBtn.disabled = false;
            } else {
                this.showStatus('Berechnung gestoppt', 'calculating');
            }
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

    async calculatePiChudnovsky(maxIterations, delay) {
        // Using Machin's formula for PI calculation with high precision
        // Machin's formula: PI = 16*arctan(1/5) - 4*arctan(1/239)
        // Using BigInt for arbitrary precision
        
        const digitsPerIteration = 1.4; // Approximate digits per iteration
        const targetDigits = Math.ceil(maxIterations * digitsPerIteration);
        
        let piString = '';
        
        for (let iteration = 1; iteration <= maxIterations; iteration++) {
            if (this.shouldStop) break;

            // Calculate with increasing precision using BigInt
            const currentDigits = Math.ceil(iteration * digitsPerIteration);
            
            // Calculate PI using Machin's formula with BigInt
            piString = this.calculatePiMachin(currentDigits + 5);

            // Update display
            if (iteration % Math.max(1, Math.floor(maxIterations / 50)) === 0 || iteration === maxIterations) {
                // Truncate to currentDigits for display
                const truncated = piString.substring(0, currentDigits + 2); // +2 for "3."
                this.displayPi(truncated);
                this.updateStats(iteration, truncated.length - 2); // -2 for "3."
                
                if (delay > 0) {
                    await this.sleep(delay);
                }
            }
        }

        // Final display
        const finalPi = piString.substring(0, targetDigits + 2);
        this.displayPi(finalPi);
        this.updateStats(maxIterations, finalPi.length - 2);
    }

    calculatePiMachin(digits) {
        // Calculate PI using Machin's formula with BigInt
        // PI = 16*arctan(1/5) - 4*arctan(1/239)
        
        const scale = BigInt(10) ** BigInt(digits + 10);
        
        const arctan5 = this.arctanBigInt(5n, scale, digits);
        const arctan239 = this.arctanBigInt(239n, scale, digits);
        
        const pi = (16n * arctan5 - 4n * arctan239) / (scale / BigInt(10) ** BigInt(digits));
        
        // Convert to string with decimal point
        const piStr = pi.toString();
        if (piStr.length <= 1) return "3.14159";
        
        return piStr.charAt(0) + '.' + piStr.substring(1);
    }

    arctanBigInt(x, scale, precision) {
        // Calculate arctan(1/x) using Taylor series with BigInt
        // arctan(1/x) = 1/x - 1/(3*x^3) + 1/(5*x^5) - ...
        
        let sum = 0n;
        let xSquared = x * x;
        let power = scale / x;
        let sign = 1n;
        
        for (let i = 0; i < precision && power > 0n; i++) {
            sum += sign * power / BigInt(2 * i + 1);
            power = power / xSquared;
            sign = -sign;
        }
        
        return sum;
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
            formattedDec += decPart.substring(i, i + 10);
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

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PICalculator();
});
