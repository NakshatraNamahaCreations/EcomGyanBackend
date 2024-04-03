const express = require("express");
const router = express.Router();
const multer = require("multer");
const courseController = require("../../Controller/Courses/my-course");

// Storage configuration
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/course"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Rename file with current timestamp
  },
});

const upload = multer({ storage: storage });

router.post(
  "/addcourse",
  upload.single("thumbnailImage"),
  courseController.addCourse
);
// router.post("/addlink", courseController.addYouTubeLink);
router.get("/getallcourses", courseController.getAllCourse);
router.get("/getcoursebyid/:id", courseController.getCourseById);
// router.put(
//   "/updatebanner/:id",
//   upload.single("bannerImage"),
//   bannerController.updateBannerById
// );
// router.delete("/deletebanner/:id", bannerController.deleteBannerById);

module.exports = router;
