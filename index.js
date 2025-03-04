const inputToConvert = document.getElementById("number-to-convert");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", () => {
    let numberToConvertValue = Number(inputToConvert.value);
    length = convert(numberToConvertValue, "meters", "feet", 3.281);
    lengthEl.textContent = length;
    volume = convert(numberToConvertValue, "liters", "gallons", 0.264);
    volumeEl.textContent = volume;
    mass = convert(numberToConvertValue, "kilos", "pounds", 2.204);
    massEl.textContent = mass;
});

function convert(numberToConvert, metric, imperial, conversion) {
    let valueImperial = (numberToConvert * conversion).toFixed(3);
    let valueMetric = (numberToConvert / conversion).toFixed(3);
    return templateString = `${numberToConvert} ${metric} = ${valueImperial} ${imperial} | ${numberToConvert} ${imperial} = ${valueMetric} ${metric}`;
}

// function convertLength(length) {
//     const meterToFeet = (length * 3.281).toFixed(3);
//     const feetToMeter = (length / 3.281).toFixed(3);
//     let templateString = `${length} meters = ${meterToFeet} feet | ${length} feet = ${feetToMeter} meters`;
//     lengthEl.textContent = templateString;
// }

// function convertVolume(volume) {
//     const litersToGallons = (volume * 0.264).toFixed(3);
//     const gallonsToLiters = (volume / 0.264).toFixed(3);
//     let templateString = `${volume} liters = ${litersToGallons} gallons | ${volume} gallons = ${gallonsToLiters} liters`;
//     volumeEl.textContent = templateString;
// }

// function convertMass(mass) {
//     const kilosToPounds = (mass * 2.204).toFixed(3);
//     const poundsToKilos = (mass / 2.204).toFixed(3);
//     let templateString = `${mass} kilos = ${kilosToPounds} pounds | ${mass} pounds = ${poundsToKilos} kilos`;
//     massEl.textContent = templateString;
// }
