const cloudinary =  ("../../config/cloud-connection");

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
  reader.readAsDataURL(this.files[0]);
  return reader.result;
});

async function submitFormHandler(event) {
  event.preventDefault();
  //   on  submit, get the image url
  const image_url = document.querySelector("#image-input").value;
  console.log(image_url);

  // use reader to get the image url
//   const reader = new FileReader();

//   reader
//     .addEventListener("load", () => {
//       const uploaded_image = reader.result;
//       console.log(uploaded_image);
//       document.querySelector(
//         "#display-image"
//       ).style.backgroundImage = `url(${uploaded_image})`;
//       return uploaded_image;
//     })
//     .readAsDataURL(image_url);
//   use cloudinary to upload the image
    const uploaded_image = await cloudinary.uploader.upload(image_url);
  console.log(uploaded_image);
}

//   reader.readAsDataURL(image_input.files[0]);

// //   get result of reader.readAsDataURL
//     const uploaded_image = await reader.result;
//     console.log(uploaded_image);
// //   const formData = new FormData();
//   formData.append("image", image.files[0]);
//   console.log(reader.result)
//   const image = reader.readAsDataURL(image_input.files[0]);

//   console.log(image.files[0]);
//   const response = await fetch("api/posts/image", {
//     method: "POST",
//     body: image.files[0],
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   if (response.ok) {
//     const result = await response.json();
//     console.log(result);
//   } else {
//     console.log(response.statusText);
//   }

document
  .querySelector(".share-image-form")
  .addEventListener("submit", submitFormHandler);
