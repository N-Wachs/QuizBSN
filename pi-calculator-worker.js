// Web Worker for PI Calculator
// This runs in a separate thread to keep the UI responsive

self.onmessage = function(e) {
    const { iterations, delay } = e.data;
    
    try {
        calculatePiChudnovsky(iterations, delay);
    } catch (error) {
        self.postMessage({
            type: 'error',
            message: error.message
        });
    }
};

async function calculatePiChudnovsky(maxIterations, delay) {
    const digitsPerIteration = 1.4;
    const targetDigits = Math.ceil(maxIterations * digitsPerIteration);
    
    let piString = '';
    
    for (let iteration = 1; iteration <= maxIterations; iteration++) {
        // Calculate with increasing precision using BigInt
        const currentDigits = Math.ceil(iteration * digitsPerIteration);
        
        // Calculate PI using Machin's formula with BigInt
        piString = calculatePiMachin(currentDigits + 5);

        // Send progress updates
        const progress = (iteration / maxIterations) * 100;
        
        // Update display periodically or on last iteration
        if (iteration % Math.max(1, Math.floor(maxIterations / 50)) === 0 || iteration === maxIterations) {
            const truncated = piString.substring(0, currentDigits + 2); // +2 for "3."
            
            self.postMessage({
                type: 'progress',
                iteration: iteration,
                totalIterations: maxIterations,
                piValue: truncated,
                decimalPlaces: truncated.length - 2,
                progress: progress
            });
            
            if (delay > 0 && iteration < maxIterations) {
                await sleep(delay);
            }
        }
    }

    // Final result
    const finalPi = piString.substring(0, targetDigits + 2);
    self.postMessage({
        type: 'complete',
        piValue: finalPi,
        decimalPlaces: finalPi.length - 2,
        iterations: maxIterations
    });
}

function calculatePiMachin(digits) {
    // Calculate PI using Machin's formula with BigInt
    // PI = 16*arctan(1/5) - 4*arctan(1/239)
    
    const scale = BigInt(10) ** BigInt(digits + 10);
    
    const arctan5 = arctanBigInt(5n, scale, digits);
    const arctan239 = arctanBigInt(239n, scale, digits);
    
    const pi = (16n * arctan5 - 4n * arctan239) / (scale / BigInt(10) ** BigInt(digits));
    
    // Convert to string with decimal point
    const piStr = pi.toString();
    if (piStr.length <= 1) return "3.14159";
    
    return piStr.charAt(0) + '.' + piStr.substring(1);
}

function arctanBigInt(x, scale, precision) {
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
