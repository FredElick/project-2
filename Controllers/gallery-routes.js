const router = require("express").Router();
// const sequelize = require('../config/connection');
const cloudinary = require("../config/cloud-connection");
// const { Post, User, Comment, Vote } = require('../models');

// router.get("/", (req, res) => {

//   // get all images from cloudinary

//   cloudinary.api.root_folders(function (error, result) {
//     if (error) {
//       console.log(error);
//     } else {
//       res.render("gallery", { images: result.folders.prompts});
//     }
//   });
// });

router.get("/", (req, res) => {
  // show images from cloudinary in the folder prompts
  const folder = [
    {
      name: "prompts",
      path: "prompts",
    },
  ];
  const options = {
    max_results: 10,
    folder,
  };
  cloudinary.api.resources(options, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.render("gallery", { images: result.resources });
    }
  });
});

module.exports = router;
