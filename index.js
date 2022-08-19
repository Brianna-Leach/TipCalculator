function valueUpdater(e) {
  const billTotalInput1 = document.querySelector('#billTotal');
  const billTotal = Number.isNaN(parseFloat(billTotalInput1.value))
    ? 0.0
    : parseFloat(billTotalInput1.value);
  const tipPercent = document.querySelector('#tip').value;
  const tipAmountPara = document.querySelector('#tipAmount');
  const totalInFullPara = document.querySelector('#totalInFull');
  const tipPercentagePara = document.querySelector('#tipPercentage');
  const tipDecimal = tipPercent / 10 ** 2;
  const tipAmount = billTotal * tipDecimal;
  const billTotalInFull = billTotal + tipAmount;
  tipAmountPara.innerHTML = `$${tipAmount.toFixed(2)}`;
  totalInFullPara.innerHTML = `$${billTotalInFull.toFixed(2)}`;
  tipPercentagePara.innerHTML = `${tipPercent}%`;
}

const billTotalInput2 = document.querySelector('#billTotal');
const tipInput = document.querySelector('#tip');
billTotalInput2.addEventListener('input', valueUpdater);
tipInput.addEventListener('input', valueUpdater);
