const router = require("express").Router();
// const sequelize = require('../config/connection');
const cloudinary = require("../config/cloud-connection");
// const { Post, User, Comment, Vote } = require('../models');

router.get("/", (req, res) => {
  // get all images from cloudinary

  cloudinary.api.resources(function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.render("gallery", { images: result.resources });
    }
  });
});

module.exports = router;
