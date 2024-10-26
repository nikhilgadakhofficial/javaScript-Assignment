const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls,
  setTimeout(() => {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ uername: "Nikhil", email: "Gadakh@1233" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Gadakh", password: "123" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

const username = promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((uername) => {
    console.log(uername);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The Promise is resoved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScrip", password: "123" });
    } else {
      reject("ERROR : Js went wrong");
    }
  }, 1000);
});

async function consmePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consmePromiseFive();
/*
async function getAllUser() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E :', error);
    }
}
getAllUser()
*/

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
