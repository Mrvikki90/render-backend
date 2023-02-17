const { transport } = require("../mail/MAIL");

module.exports = (app) => {
  const tutorials = require("../controllers/controllers");
  const Images = require("../middleware/upload-image");
  const mailService = require('../mail/MAIL')

  var router = require("express").Router();

  router.post(
    "/post",
    Images.imageUpload.single("profileImg"),
    tutorials.create
  );

  router.get("/getone", tutorials.findOne);

  router.post("/login", tutorials.Login);

  router.get("/allUsers", tutorials.findAll);

  router.post('/sendMail', mailService.sendMailNode)

  app.use("/api", router);
};
