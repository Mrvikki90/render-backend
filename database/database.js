const dbConfig = require("../config/keys");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.MONGO_URI;
db.user = require("../models/user.modal")(mongoose);
db.conversation = require("../models/converstation.modal")(mongoose);
db.message = require("../models/messages.modal")(mongoose);

module.exports = db;
