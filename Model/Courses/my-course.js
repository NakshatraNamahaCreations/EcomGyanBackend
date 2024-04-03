const mongoose = require("mongoose");

const myCourseSchema = new mongoose.Schema(
  {
    // Add Course
    courseName: String,
    courseDescription: String,
    freeMaterialDocs: String,
    materialDocsId: String,
    freeMaterialVideo: String,
    materialVideoId: String,
    thumbnailImage: String,
    durationType: String,
    validity: String,
    validityPeriod: String,
    price: Number,
    discount: Number,
    courseFeature: Boolean,
    effectivePrice: Number,
  },
  {
    timestamps: true,
  }
);

const myCourse = mongoose.model("MyCourse", myCourseSchema);
module.exports = myCourse;
