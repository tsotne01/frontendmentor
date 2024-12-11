"use strict";

const calculateBtn = document.querySelector("#calculate_repayments");
const mortageAmount = document.querySelector("#mortgage-amount");
const mortageTerm = document.querySelector("#mortgage-term");
const interestRate = document.querySelector("#interest-rate");
const replacement = document.querySelector("#repayment");
const interestOnly = document.querySelector("#interest-only");

const seeResultCard = document.querySelector(".see-result");
const resultCard = document.querySelector(".results");

const monthlyRepayments = document.querySelector(
  ".result__calculation-box-payment-amnt"
);
const totalRepay = document.querySelector(".total-repay");

const clearAllBtn = document.querySelector(".cotainer__calculator-clear-btn");

const calcAndDisplayMortgage = (e) => {
  // console.log(e.target);
  // console.log(replacement.checked);
  // console.log(interestOnly.checked);
  e.preventDefault();
  const mrtamount = mortageAmount.value;
  const mrtTrm = mortageTerm.value;
  const intRT = interestRate.value;
  if (replacement.checked) {
    if (!seeResultCard.classList.contains("hidden")) {
      seeResultCard.classList.add("hidden");
    }
    if (resultCard.classList.contains("hidden")) {
      resultCard.classList.remove("hidden");
    }

    monthlyRepayments.style.fontSize = "15px";
    totalRepay.style.fontSize = "15px";
    monthlyRepayments.textContent = `calculation results when choosen replacement`;
    totalRepay.textContent = ` calculation results when choosen replacement`;
  } else if (interestOnly.checked) {
    if (!seeResultCard.classList.contains("hidden")) {
      seeResultCard.classList.add("hidden");
    }
    if (resultCard.classList.contains("hidden")) {
      resultCard.classList.remove("hidden");
    }

    monthlyRepayments.style.fontSize = "15px";
    totalRepay.style.fontSize = "15px";
    monthlyRepayments.textContent = `calculation results when choosen interest only`;
    totalRepay.textContent = `calculation results when choosen interest only`;
  }
};

const clearEverything = () => {
  // calculateBtn;
  mortageAmount.value = "";
  mortageTerm.value = "";
  interestRate.value = "";
  replacement.checked = false;
  interestOnly.checked = false;
  if (seeResultCard.classList.contains("hidden")) {
    seeResultCard.classList.remove("hidden");
  }
  if (!resultCard.classList.contains("hidden")) {
    resultCard.classList.add("hidden");
  }
};
clearAllBtn.addEventListener("click", clearEverything);
calculateBtn.addEventListener("click", calcAndDisplayMortgage);
