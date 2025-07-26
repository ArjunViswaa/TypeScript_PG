"use strict";
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "The Initial Amount must atleast be 0";
    }
    else if (expectedReturn < 0) {
        return "The Expected return must not be negative";
    }
    else if (duration < 0) {
        return "The Duration must be > 0";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total += annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total : ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions : ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned : ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log(`-----------------------------`);
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
