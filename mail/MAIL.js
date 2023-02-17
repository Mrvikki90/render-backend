const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const viewPath = path.resolve(__dirname, "./templates/views/");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "viveksharma34527@gmail.com",
    pass: "hhymqvxoozhocnlz",
  },
  secure: true,
});

const templateOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: viewPath,
    defaultLayout: false,
  },
  viewPath: viewPath,
  extName: ".handlebars",
};

transporter.use("compile", hbs(templateOptions));

exports.sendMailNode = (req, res) => {
  console.log(req.body)
  const { name, email, message } = req.body;
  var mailOptions = {
    from: "viveksharma34527@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    template : 'index',
    context : {
      name : name,
      message : 'https://www.google.com/'
    }
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      res.send(info.response)
      console.log("Email sent: " + info.response);
    }
  });
};
