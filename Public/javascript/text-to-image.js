document.getElementById("loading").style.visibility = "hidden";

const promptFormHandler = async function (e) {
  e.preventDefault();
  document.getElementById("loading").style.visibility = "visible";

  try {
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
    return response;
  } catch (err) {
    console.log(err);
    alert("error while making image");
  }
};

// document
//   .querySelector("#image-prompt-form")
//   .addEventListener("submit", promptFormHandler);

document
  .querySelector(".image-prompt-form")
  .addEventListener("submit", promptFormHandler);

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
