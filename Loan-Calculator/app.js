document.getElementById("loan-form").addEventListener("submit", function (e) {
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResult, 1000);
  e.preventDefault();
});

function calculateResult() {
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayement = document.getElementById("monthly-payement");
  const totalPayement = document.getElementById("total-payement");
  const totalInterest = document.getElementById("total-interest");

  const Principal = parseFloat(amount.value);
  const interestRate = parseFloat(interest.value) / 100 / 12;
  const calculatedPayements = parseFloat(years.value) * 12;

  const x = Math.pow(1 + interestRate, calculatedPayements);
  const monthly = (Principal * x * interestRate) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayement.value = monthly.toFixed(2);
    totalPayement.value = (monthly * calculatedPayements).toFixed(2);
    totalInterest.value = (monthly * calculatedPayements - Principal).toFixed(
      2
    );
    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your number");
    document.getElementById("loading").style.display = "none";
  }

  //   amount.value = "";
  //   interest.value = "";
  //   years.value = "";
}

function showError(msg) {
  const errorDiv = document.createElement("div");

  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(msg));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
