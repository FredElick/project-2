// SHOWS IMAGE PREVIEW
const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    console.log(uploaded_image);
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
    return uploaded_image;
  });
  //   THIS IS THE ACTUAL PATH
  reader.readAsDataURL(this.files[0]);
  return reader.result;
});

// ACTUAL SUBMIT FORM
async function submitFormHandler(event) {
  event.preventDefault();
  const image_url = document.querySelector("#image-input").value;

  //   THIS CONSOLES A FAKE  PATH..??
  console.log(image_url);
}

document
  .querySelector(".share-image-form")
  .addEventListener("submit", submitFormHandler);
