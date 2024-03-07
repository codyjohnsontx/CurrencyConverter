document.getElementById("convertButton").addEventListener("click", getCurrency);

function getCurrency() {
  const userCurrencyAmount = document.getElementById(
    "userCurrencyDropdown"
  ).value;
  const newCurrencyAmount = document.getElementById(
    "newCurrencyDropdown"
  ).value;
  const amountToConvert = document.getElementById("amount").value;

  const host = "api.frankfurter.app";
  const URL = `https://${host}/latest?from=${userCurrencyAmount}&to=${newCurrencyAmount}`;

  fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
      // Handle the response data
      const exchangeRate = data.rates[newCurrencyAmount];
      const convertedAmount = amountToConvert * exchangeRate;
      document.getElementById(
        "convertedCurrency"
      ).textContent = `${amountToConvert} ${userCurrencyAmount} = ${convertedAmount.toFixed(
        2
      )} ${newCurrencyAmount}`;
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching data:", error);
    });
}
