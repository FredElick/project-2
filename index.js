// const cloudinary = require('./config/cloud-connection');

console.log(cloudinary.config())

const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
  
    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
  };
  
  (async () => {
  
    // Set the image to upload
    const imagePath = './public/img/test.jpg';
  
    // Upload the image
     await uploadImage(imagePath);
  
    // // Get the colors in the image
    // const colors = await getAssetInfo(publicId);
  
    // Create an image tag, using two of the colors in a transformation
    // const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);
  
    // Log the image tag to the console
    // console.log(imageTag);
  
  })();