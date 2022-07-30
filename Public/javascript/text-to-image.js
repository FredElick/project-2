document.getElementById("loading").style.visibility = "hidden";

const promptFormHandler = async function (e) {
  e.preventDefault();
  document.getElementById("loading").style.visibility = "visible";

  try {
    var response = await fetch("/api/posts/prompts", {
      method: "POST",

      body: JSON.stringify({
        value: document.querySelector("#image-prompt").value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
    alert("error while making image");
  }

  if (response.ok) {

    document.location.replace("/gallery/");
  }
};

document
  .querySelector(".image-prompt-form")
  .addEventListener("submit", promptFormHandler);
