const mongoose = require("mongoose");

// define the schema
const ProfileSchema = new mongoose.Schema({
  _id: String,
  profileData: Object,
});

// define the model
const Profile = mongoose.model("Profile", ProfileSchema);
module.exports = { Profile, ProfileSchema };
