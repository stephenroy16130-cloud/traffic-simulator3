(function() {
    const redLight = document.getElementById('redLight');
    const yellowLight = document.getElementById('yellowLight');
    const greenLight = document.getElementById('greenLight');

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

    function runSimulation() {
        // Step 1 & 2: generate random integer 0‑2
        const randomNumber = Math.random();
        const randomLight = Math.floor(randomNumber * 3);

        console.log("Random light number (0‑2):", randomLight);

        // Step 3 & 4: switch statement
        switch (randomLight) {
            case 0:
                console.log("🔴 Red light");
                console.log("Instruction: STOP");
                activateLight('red');
                break;
            case 1:
                console.log("🟡 Yellow light");
                console.log("Instruction: SLOW DOWN");
                activateLight('yellow');
                break;
            case 2:
                console.log("🟢 Green light");
                console.log("Instruction: GO");
                activateLight('green');
                break;
            default:
                console.log("Unexpected value");
        }
    }

    document.getElementById('simulateBtn').addEventListener('click', runSimulation);

    runSimulation();
})();