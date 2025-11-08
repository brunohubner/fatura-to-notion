/* eslint-disable no-console */
module.exports = async function retryPromise(
  promise,
  retriesLeft = 5,
) {
  try {
    const result = await promise();
    return result;
  } catch (error) {
    console.error(`ERROR: ${
      error.response?.response.data
      ?? error.message
      ?? JSON.stringify(error, null, 2)
    };`);

    if (retriesLeft > 0) {
      console.warn(`Tentando resolver Promise novamente, ${retriesLeft} tentativas restantes;`);
      return retryPromise(promise, retriesLeft - 1);
    }

    throw error;
  }
};
