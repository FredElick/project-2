const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: "btking1",
  api_key: "386916492395731",
  api_secret: "cip3D05tfXRGaTUUw9aIFqJX7w0",
});

// console.log(cloudinary.config())
module.exports = cloudinary;
