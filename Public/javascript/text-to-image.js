const promptFormHandler = async function (e) {
  e.preventDefault();

  const response = await fetch("/api/posts/prompts", {
    method: "POST",
    // body: document.querySelector('#image-prompt').value,
    // send post data as json object
    body: JSON.stringify({
      value: document.querySelector("#image-prompt").value,
    }),
    headers: {
        "Content-Type": "application/json",
    },
  });

  // if(response.ok === true ) {
  //   console.log("success");

  // }
console.log('success');
  // if (response.ok) {
  //   document.location.replace("/gallery");
    
    
  // } else {
  //   alert(response.statusText);
  // }
  // document.location.replace("/gallery");

  //   console.log(resp);
};

// document
//   .querySelector("#image-prompt-form")
//   .addEventListener("submit", promptFormHandler);

document.querySelector('.image-prompt-form').addEventListener('submit', promptFormHandler);
  

// async function handlePrompt(event) {

//     event.preventDefault();

//   if (!document.querySelector("#image-input")) {
//     return;
//   } else {
//     var resp = await deepai.callStandardApi("text2img", {
//       text: document.getElementById("#image-prompt").value,
//     });
//     console.log(resp);
//   }
// }
