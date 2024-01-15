var registerForm = document.querySelector(' .registerForm');
var result = document.querySelector('.result');
var data = '';
var rate;
var currency = ['dollar', 'dinar', 'nis'];

for (var i = 0; i < currency.length; i++) {
  data += `<option>${currency[i]}</option>`;
}
document.querySelector('select').innerHTML = data;

registerForm.onsubmit = function (e) {
  e.preventDefault();
  var elements = e.target.elements;
  var amount = elements[0].value;
  var price = {
    index: amount,
    selectedCurrency: elements['exchange'].value,
  };

  if (price.selectedCurrency == 'dollar') {
    rate = 0.27;
  } else if (price.selectedCurrency == 'dinar') {
    rate = 0.19;
  } else {
    rate = 1;
  }
  var final = price.index * rate;
  result.textContent = `Amount:${price.index} From NIS to ${price.selectedCurrency}
   Equal: ${final}`;
};
