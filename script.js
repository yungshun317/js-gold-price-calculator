const labelExchangeRate = document.querySelector('.gold-price-calculator__exchange-rate-label');
const labelConvertedAmount = document.querySelector('.gold-price-calculator__converted-amount-label');
const labelConvertedAmountPerWeight = document.querySelector('.gold-price-calculator__converted-amount-per-weight-label');

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

inputWeightValue = Number(inputWeight.value);
inputWeightFromUnitValue = Number(inputWeightFromUnit.value);
inputWeightToUnitValue = Number(inputWeightToUnit.value);
inputPercentageValue = Number(inputPercentage.value);
inputGoldPriceValue = Number(inputGoldPrice.value);
inputFeeValue = Number(inputFee.value);
inputToCurrencyValue = Number(inputToCurrency.value);
inputExchangeRateValue = Number(inputExchangeRate.value);

inputWeight.addEventListener('input', function(e) {
    inputWeightValue = Number(e.target.value);
    weightConversion();
    console.log(inputPercentageValue);
    realWeight();
    amount();
    convertedAmount()
});

inputWeightFromUnit.addEventListener('change', function(e) {
    inputWeightFromUnitValue = Number(e.target.value);
    console.log(inputWeightFromUnitValue);
    weightConversion();
    realWeight();
    amount();
    convertedAmount()
});

inputWeightToUnit.addEventListener('change', function(e) {
    inputWeightToUnitValue = Number(e.target.value);
    labelConvertedAmountPerWeight.textContent = '每' + inputWeightToUnit.options[inputWeightToUnit.selectedIndex].text + '/' + inputToCurrency.options[inputToCurrency.selectedIndex].text;
    weightConversion();
    realWeight();
    amount();
    convertedAmount()
});

inputPercentage.addEventListener('input', function(e) {
    inputPercentageValue = Number(e.target.value);
    weightConversion();
    realWeight();
    amount();
    convertedAmount()
});

inputGoldPrice.addEventListener('input', function(e) {
    inputGoldPriceValue = Number(e.target.value);
    weightConversion();
    realWeight();
    amount();
    convertedAmount()
});

inputFee.addEventListener('input', function(e) {
    inputFeeValue = Number(e.target.value);
    weightConversion();
    realWeight();
    amount();
    convertedAmount()
});

inputToCurrency.addEventListener('change', function(e) {
    inputToCurrencyValue = Number(e.target.value);
    inputExchangeRateValue = inputToCurrencyValue;
    inputExchangeRate.value = inputExchangeRateValue;
    labelExchangeRate.textContent = inputToCurrency.options[inputToCurrency.selectedIndex].text + '匯率';
    labelConvertedAmount.textContent = inputToCurrency.options[inputToCurrency.selectedIndex].text + '合計價格';
    labelConvertedAmountPerWeight.textContent = '每' + inputWeightToUnit.options[inputWeightToUnit.selectedIndex].text + '/' + inputToCurrency.options[inputToCurrency.selectedIndex].text;
    weightConversion();
    realWeight();
    amount();
    convertedAmount()
});

inputExchangeRate.addEventListener('input', function(e) {
    inputExchangeRateValue = Number(e.target.value);
    weightConversion();
    realWeight();
    amount();
    convertedAmount()
});

function weightConversion() {
    console.log(inputWeightFromUnitValue);
    console.log(inputWeightToUnitValue);
    outputToWeightTextValue = inputWeightValue * inputWeightFromUnitValue / inputWeightToUnitValue;
    outputToWeightText.textContent = outputToWeightTextValue.toString() + inputWeightToUnit.options[inputWeightToUnit.selectedIndex].text;
}

function realWeight() {
    console.log(inputPercentageValue);
    outputRealWeightTextValue = inputWeightValue * inputWeightFromUnitValue / 3.75 * inputPercentageValue * 0.01;
    outputRealWeightText.textContent = outputRealWeightTextValue.toString() + '台錢';
}

function amount() {
    console.log(inputGoldPriceValue);
    console.log(outputRealWeightTextValue);
    console.log(inputFeeValue);
    outputAmountNumberTextValue = inputGoldPriceValue * outputRealWeightTextValue + inputFeeValue;
    outputAmountNumberText.textContent = 'NT$' + outputAmountNumberTextValue.toString();
    outputAmountWordText.textContent = convertNumberToWord(outputAmountNumberTextValue);
}

function convertedAmount() {
    outputConvertedAmountTextValue = outputAmountNumberTextValue / inputExchangeRateValue;
    outputConvertedAmountText.textContent = outputConvertedAmountTextValue.toString();

    outputConvertedAmountPerWeightTextValue = outputConvertedAmountTextValue / outputToWeightTextValue;
    outputConvertedAmountPerWeightText.textContent = outputConvertedAmountPerWeightTextValue.toString();
}

function convertDigitToChar(digit) {
    let char;

    switch(digit) {
        case 0:
            char = '零';
            break;
        case 1:
            char = '壹';
            break;
        case 2:
            char = '貳';
            break;
        case 3:
            char = '參';
            break;
        case 4:
            char = '肆';
            break;
        case 5:
            char = '伍';
            break;
        case 6:
            char = '陸';
            break;
        case 7:
            char = '柒';
            break;
        case 8:
            char = '捌';
            break;
        case 9:
            char = '玖';
            break;
        default:
            char = '零';
    }
    return char;
}

function convertNumberToWord(num) {
    let word = '';

    if (num >= 100000000) {
        word += convertDigitToChar(Math.floor(num / 100000000)) + '億';
        num = num % 100000000;
        console.log(num + 'log1');
    }

    if (num >= 10000) {
        console.log(num + 'log2');

        if (num >= 10000000) {
            // word += convertDigitToChar(Math.floor(num / 10000000)) + '仟';
            word += Math.floor(num / 10000000) !== 0 ? convertDigitToChar(Math.floor(num / 10000000)) + '仟' : '零';
            num = num % 10000000;
            console.log(num + 'wh');
        } else {
            word += (Math.floor(num / 1000000) !== 0) && (Math.floor(num / 100000) !== 0) && (Math.floor(num / 10000) !== 0) ? '零' : '';
        }

        if (num >= 1000000) {
            // word += convertDigitToChar(Math.floor(num / 1000000)) + '佰';
            word += Math.floor(num / 1000000) !== 0 ? convertDigitToChar(Math.floor(num / 1000000)) + '佰' : '零';
            num = num % 1000000;
        } else {
            word += (Math.floor(num / 100000) !== 0) && (Math.floor(num / 10000) !== 0) ? '零' : '';
        }

        if (num >= 100000) {
            // word += convertDigitToChar(Math.floor(num / 100000)) + '拾';
            console.log(num + '?');
            word += Math.floor(num / 100000) !== 0 ? convertDigitToChar(Math.floor(num / 100000)) + '拾' : '零';
            num = num % 100000;
        } else {
            word += Math.floor(num / 10000) !== 0 ? '零' : '';
        }

        console.log(num + 'be');
        word += Math.floor(num / 10000) !== 0 ? convertDigitToChar(Math.floor(num / 10000)) : '';
        word += '萬';
        num = num % 10000;
    }

    if (num >= 1000) {
        // word += convertDigitToChar(Math.floor(num / 1000)) + '仟';
        console.log(num + 'thou')
        word += Math.floor(num / 1000) !== 0 ? convertDigitToChar(Math.floor(num / 1000)) + '仟' : '零';
        num = num % 1000;
    } else {
        word += Math.floor(num / 100) !== 0 ? '零' : '';
    }

    if (num >= 100) {
        // word += convertDigitToChar(Math.floor(num / 100)) + '佰';
        word += Math.floor(num / 100) !== 0 ? convertDigitToChar(Math.floor(num / 100)) + '佰' : '零';
        num = num % 100;
    } else {
        word += Math.floor(num / 10) !== 0 ? '零' : '';
    }

    if (num >= 10) {
        // word += convertDigitToChar(Math.floor(num / 10)) + '拾';
        word += Math.floor(num / 10) !== 0 ? convertDigitToChar(Math.floor(num / 10)) + '拾' : '零';
        num = num % 10;
    } else {
        word += '';
    }

    word += convertDigitToChar(Math.floor(num));

    return word;
}



