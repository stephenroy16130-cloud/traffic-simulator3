(function() {
    const redLight = document.getElementById('redLight');
    const yellowLight = document.getElementById('yellowLight');
    const greenLight = document.getElementById('greenLight');
    const currentLightDisplay = document.getElementById('currentLightDisplay');
    const currentInstructionDisplay = document.getElementById('currentInstructionDisplay');
    const redCountSpan = document.getElementById('redCount');
    const yellowCountSpan = document.getElementById('yellowCount');
    const greenCountSpan = document.getElementById('greenCount');
    const simulateBtn = document.getElementById('simulateBtn');
    const resetBtn = document.getElementById('resetBtn');

    const counts = { red: 0, yellow: 0, green: 0 };

    function clearLights() {
        redLight.classList.remove('active');
        yellowLight.classList.remove('active');
        greenLight.classList.remove('active');
    }

    function activateLight(color) {
        clearLights();
        if (color === 'red') redLight.classList.add('active');
        if (color === 'yellow') yellowLight.classList.add('active');
        if (color === 'green') greenLight.classList.add('active');
    }

    function updateUI(color, instruction) {
        currentLightDisplay.textContent = color.toUpperCase();
        currentLightDisplay.style.color = color === 'red' ? '#ff6b6b' : color === 'yellow' ? '#ffcc00' : '#5cff7e';
        currentInstructionDisplay.textContent = instruction;
    }

    function updateStats() {
        redCountSpan.textContent = counts.red;
        yellowCountSpan.textContent = counts.yellow;
        greenCountSpan.textContent = counts.green;
    }

    function runSimulation() {
        const randomNumber = Math.random();
        const randomLight = Math.floor(randomNumber * 3);

        let color, instruction;

        switch (randomLight) {
            case 0:
                console.log("🔴 Red light");
                console.log("Instruction: STOP");
                color = 'red';
                instruction = 'STOP';
                break;
            case 1:
                console.log("🟡 Yellow light");
                console.log("Instruction: SLOW DOWN");
                color = 'yellow';
                instruction = 'SLOW DOWN';
                break;
            case 2:
                console.log("🟢 Green light");
                console.log("Instruction: GO");
                color = 'green';
                instruction = 'GO';
                break;
            default:
                console.log("Unexpected value");
                return;
        }

        counts[color]++;
        activateLight(color);
        updateUI(color, instruction);
        updateStats();
    }

    function resetStats() {
        counts.red = 0;
        counts.yellow = 0;
        counts.green = 0;
        updateStats();
        currentLightDisplay.textContent = '–';
        currentInstructionDisplay.textContent = 'Press Simulate';
        currentLightDisplay.style.color = '#eaeaea';
        clearLights();
    }

    simulateBtn.addEventListener('click', runSimulation);
    resetBtn.addEventListener('click', resetStats);

    runSimulation();
})();