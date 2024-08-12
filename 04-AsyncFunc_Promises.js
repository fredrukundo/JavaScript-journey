/**
   @desc:
      Async Function and Promise (ES6/ES8)
         (=> allows to write asynchronous code)
            "async and await keywords"

 */

function fetchDate() {
   return new Promise((resolve) => {
      setTimeout(() => resolve("Date received!"), 1000);
   });
}

async function getData() {
   let data = await fetchDate();
   console.log(data);
}

getData();