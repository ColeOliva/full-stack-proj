const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

// get all saved profiles
router.get("/", profileController.getProfiles);

// create a new profile
router.post("/", profileController.createProfile);

// delete a profile
router.delete("/:_id", profileController.deleteProfile);

module.exports = router;
