const myCourseSchema = require("../../Model/Courses/my-course");

class Course {
  async addCourse(req, res) {
    try {
      const {
        courseName,
        courseDescription,
        freeMaterialVideo,
        freeMaterialDocs,
        materialDocsId,
        materialVideoId,
        durationType,
        validity,
        validityPeriod,
        price,
        discount,
        effectivePrice,
        courseFeature,
      } = req.body;
      let file = req.file?.filename;
      const newCourse = new myCourseSchema({
        courseName,
        courseDescription,
        freeMaterialVideo,
        freeMaterialDocs,
        materialDocsId,
        materialVideoId,
        durationType,
        validity,
        validityPeriod,
        price,
        discount,
        effectivePrice,
        courseFeature,
        thumbnailImage: file,
      });
      if (!file) {
        return res.status(500).json({
          status: 500,
          error: "Please select thumbnail image",
        });
      }
      await newCourse.save();
      res.status(200).json({
        status: true,
        success: "Course Added",
        data: newCourse,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getAllCourse(req, res) {
    try {
      const course = await myCourseSchema.find();
      res.status(200).json({
        status: true,
        data: course,
        count: course.length,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: `Server Error` });
    }
  }
  async getCourseById(req, res) {
    try {
      const course = await myCourseSchema.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "course not found" });
      }
      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const courseController = new Course();
module.exports = courseController;
