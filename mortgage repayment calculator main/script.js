"use strict";

const calculateBtn = document.querySelector("#calculate_repayments");
const mortageAmount = document.querySelector("#mortgage-amount");
const mortageTerm = document.querySelector("#mortgage-term");
const interestRate = document.querySelector("#interest-rate");
const replacement = document.querySelector("#repayment");
const interestOnly = document.querySelector("#interest-only");

const monthlyRepayments = document.querySelector(
  ".result__calculation-box-payment-amnt"
);
const totalRepay = document.querySelector(".total-repay");

const clearAllBtn = document.querySelector(".cotainer__calculator-clear-btn");

const calcAndDisplayMortgage = (e) => {
  // console.log(e.target);
  // console.log(replacement.checked);
  // console.log(interestOnly.checked);

  const mrtamount = mortageAmount.value;
  const mrtTrm = mortageTerm.value;
  const intRT = interestRate.value;
  if (replacement.checked) {
    monthlyRepayments.style.fontSize = "15px";
    totalRepay.style.fontSize = "15px";
    monthlyRepayments.textContent = `calculation results when choosen replacement`;
    totalRepay.textContent = ` calculation results when choosen replacement`;
  } else if (interestOnly.checked) {
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
};
clearAllBtn.addEventListener("click", clearEverything);
calculateBtn.addEventListener("click", calcAndDisplayMortgage);
