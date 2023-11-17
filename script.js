const inputWeight = document.querySelector('.gold-price-calculator__weight-input');
const inputWeightFromUnit = document.querySelector('.gold-price-calculator__weight-from-unit-select');
const inputWeightToUnit = document.querySelector('.gold-price-calculator__weight-to-unit-select');
const inputPercentage = document.querySelector('.gold-price-calculator__percentage-input');
const inputGoldPrice = document.querySelector('.gold-price-calculator__gold-price-input');
const inputFee = document.querySelector('.gold-price-calculator__fee-input');
const inputToCurrency = document.querySelector('.gold-price-calculator__to-currency-select');
const inputExchangeRate = document.querySelector('.gold-price-calculator__exchange-rate-input');

const outputToWeightText = document.querySelector('.gold-price-calculator__to-weight-text');
const outputRealWeightText = document.querySelector('.gold-price-calculator__real-weight-text');
const outputAmountNumberText = document.querySelector('.gold-price-calculator__amount-number-text');
const outputAmountWordText = document.querySelector('.gold-price-calculator__amount-word-text');
const outputConvertedAmountText = document.querySelector('.gold-price-calculator__converted-amount-text');
const outputConvertedAmountPerWeightText = document.querySelector('.gold-price-calculator__converted-amount-per-weight-text');

let inputWeightValue, inputWeightFromUnitValue, inputWeightToUnitValue, inputPercentageValue, inputGoldPriceValue, inputFeeValue, inputToCurrencyValue, inputExchangeRateValue, outputToWeightTextValue, outputRealWeightTextValue, outputAmountNumberTextValue, outputAmountWordTextValue, outputConvertedAmountTextValue, outputConvertedAmountPerWeightTextValue;

inputWeightFromUnitValue = Number(inputWeightFromUnit.value);
inputWeightToUnitValue = Number(inputWeightToUnit.value);
inputPercentageValue = Number(inputPercentage.value);
inputGoldPriceValue = Number(inputGoldPrice.value);
inputFeeValue = Number(inputFee.value);

inputWeight.addEventListener('input', function(e) {
    inputWeightValue = `${e.target.value}`;
    weightConversion();
    console.log(inputPercentageValue);
    realWeight();
    amount();
});

inputWeightFromUnit.addEventListener('change', function(e) {
    inputWeightFromUnitValue = `${e.target.value}`;
    console.log(inputWeightFromUnitValue);
    weightConversion();
    realWeight();
    amount();
});

inputWeightToUnit.addEventListener('change', function(e) {
    inputWeightToUnitValue = `${e.target.value}`;
    weightConversion();
    realWeight();
    amount();
});

inputPercentage.addEventListener('input', function(e) {
    inputPercentageValue = `${e.target.value}`;
    realWeight();
    amount();
});

inputGoldPrice.addEventListener('input', function(e) {
    inputGoldPriceValue = `${e.target.value}`;
    amount();
});

inputFee.addEventListener('input', function(e) {
    inputFeeValue = `${e.target.value}`;
    amount();
});

inputToCurrency.addEventListener('change', function(e) {
    inputToCurrencyValue = `${e.target.value}`;
});

inputExchangeRate.addEventListener('change', function(e) {
    inputExchangeRateValue = `${e.target.value}`;
});

function weightConversion() {
    console.log(inputWeightFromUnitValue);
    console.log(inputWeightToUnitValue);
    outputToWeightTextValue = inputWeightValue * inputWeightFromUnitValue / inputWeightToUnitValue;
    outputToWeightText.textContent = outputToWeightTextValue.toString();
}

function realWeight() {
    console.log(inputPercentageValue);
    outputRealWeightTextValue = inputWeightValue * inputWeightFromUnitValue / 3.75 * inputPercentageValue * 0.01;
    outputRealWeightText.textContent = outputRealWeightTextValue.toString();
}

function amount() {
    console.log(inputGoldPriceValue);
    console.log(outputRealWeightTextValue);
    console.log(inputFeeValue);
    outputAmountNumberTextValue = inputGoldPriceValue * outputRealWeightTextValue + inputFeeValue;
    outputAmountNumberText.textContent = outputAmountNumberTextValue.toString();
}

