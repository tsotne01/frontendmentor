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

    if (mrtamount && mrtTrm && intRT) {
      let monthlyPay = 0;
      let totalRep = 0;
      const monthlyRate = mrtamount / 100 / 12;
      const n = mrtTrm * 12;
      monthlyPay =
        (mrtamount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
      totalRep = monthlyPay * 12;
      monthlyRepayments.textContent = `${monthlyPay}`;
      totalRepay.textContent = `${totalRep}`;
    }
  } else if (interestOnly.checked) {
    if (!seeResultCard.classList.contains("hidden")) {
      seeResultCard.classList.add("hidden");
    }
    if (resultCard.classList.contains("hidden")) {
      resultCard.classList.remove("hidden");
    }

    if (mrtamount && mrtTrm && intRT) {
      let monthlyPay = 0;
      let totalRep = 0;
      const monthlyRate = mrtamount / 100 / 12;
      const n = mrtTrm * 12;
      monthlyPay = (mrtamount * (mrtamount / 100)) / 12;
      totalRep = monthlyPay * mrtTrm * 12;
      monthlyRepayments.textContent = `${monthlyPay}`;
      totalRepay.textContent = `${totalRep}`;
    }
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
