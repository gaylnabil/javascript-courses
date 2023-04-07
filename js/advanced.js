/*********************************
 * Synchronous Code = In an ordered sequence.
 *                    step-by-step linear instructions.
 *                    (start now => finish now)
 * Asynchronous Code = Out of sequence.
 *                     Ex: - Access to Database,
 *                         - Fetch a file,
 *                         - tasks that take time
 *                         (start now => finish sometime later)
 * */

console.log("**************************");

// Synchronous Code
console.log("START Sync...");
console.log("This step is Synchronous !");
console.log("END Sync...");

// Asynchronous Code
console.log("START Async...");
setTimeout(() => console.log("This step is Asynchronous !"), 2000);
console.log("END Async...");

/*********************************
 * Promise = Object represents the eventual completion(resolve)
 *           or failure(reject) of an asynchronous operation and
 *           its result value.
 *           Promise has a 'STATE' and 'RESULT' property.
 *           'STATE' = 'pending' or 'fulfilled' or 'rejected'
 *           'RESULT' = The value of result returned which means:
 *             - 'pending' => the result is 'undefined'
 *             - 'fulfilled' => the result is the 'value' returned
 *             - 'rejected' => the result is  the 'error' object returned
 * */

console.log("**************************");

let promise = new Promise(function (resolve, reject) {
  let isSuccess = false;

  if (isSuccess) resolve("Great Job You Have got the promise!");
  else reject("The Promise was rejected !!!");
});

promise
  .then((data) => {
    console.info(
      "🚀 ~ file: advanced.js:41 ~ .then ~ Promise Successful:",
      data
    );
  })
  .catch((err) => {
    console.error(
      "🚀 ~ file: advanced.js:44 ~ Promise Failure:",
      err,
      "\n***************************"
    );
  });

// Another Example of Promise with setTimeout() function asynchronous

let wait = (millisecond) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(
        `You have got the result after ${millisecond / 1000} seconds !!!`
      );
    }, millisecond);
  });
};

wait(2000).then((result) => {
  console.info("Promise with setTimeout: ", result);
});

/*********************************
 * async key word = make a function return a Promise object
 * */

let loadFileAsync = async () => {
  let isSuccess = true;

  if (isSuccess)
    return "Great Job You Have got the promise using 'async' key word!";
  else throw new Error("Promise was rejected  using 'async' key word!!!");
};

loadFileAsync()
  .then((value) => console.info(value))
  .catch((err) => console.error(err));

/*********************************
 * await = makes an async function that wait for a Promise.
 *       - Using 'async' with 'await' key word
 * */
console.log("***** Using 'async' with 'await' key word *****");

const runProcessAsync = async () => {
  try {
    const result = await loadFileAsync();
    console.info("Result : ", result);
    console.log(
      "🚀 ~ file: advanced.js:100 ~ runProcessAsync ~ ***** End of Async and Await *********:"
    );
  } catch (error) {
    console.error(
      "🚀 ~ file: advanced.js:104 ~ runProcessAsync ~ Error Async and Await:",
      error
    );
  }
};

runProcessAsync();
