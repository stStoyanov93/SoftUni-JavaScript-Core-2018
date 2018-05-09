function calculateCompoundInterest(data) {
    let [principalSum, interestRate, compoundingPeriod, timespan] = data;

    interestRate /= 100;
    let frequency = 12 / compoundingPeriod;

    let result = principalSum * Math.pow(1 + interestRate/frequency, frequency * timespan);
    return result.toFixed(2);
}