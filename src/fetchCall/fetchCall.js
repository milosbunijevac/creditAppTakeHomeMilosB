const mockFetch = (carPrice, userIncome, userScore) => {
  const oneFifthQual = (1 / 5) * userIncome;
  const creditScoreQual = userScore > 600;
  const oneMillCheck = carPrice < 10000000;

  return new Promise((resolve, reject) => {
    if (oneFifthQual >= carPrice && creditScoreQual && oneMillCheck) {
      return resolve("Success");
    } else {
      if (carPrice > 1000000) {
        const errorRequest = "Bad Request";
        return reject(errorRequest);
      }

      const disqualMessage =
        "We are sorry that we are not able to process this loan at this time.";
      return reject(disqualMessage);
    }
  });
};

export default mockFetch;
