const couponSchema = require("../../Model/Coupons/manage-coupon");

class CourseModule {
  async addCourse(req, res) {
    try {
      const {
        offerName,
        couponCode,
        discountAmount,
        minimumOrder,
        startDate,
        startTime,
        endDate,
        endTime,
        couponType,
        courseSeletionType,
        couponLimitation,
        usagesPerStudent,
      } = req.body;

      const newCourse = new myCourseSchema({
        offerName,
        couponCode,
        discountAmount,
        minimumOrder,
        startDate,
        startTime,
        endDate,
        endTime,
        couponType,
        courseSeletionType,
        couponLimitation,
        usagesPerStudent,
        couponStatus: false,
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

  async getAllModules(req, res) {
    try {
      const modulesData = await couponSchema.find();
      res.status(200).json({
        status: true,
        data: modulesData,
        count: modulesData.length,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: `Server Error` });
    }
  }

  async getModuleById(req, res) {
    try {
      const modulesObj = await couponSchema.findById(req.params.id);
      if (!modulesObj) {
        return res.status(404).json({ message: "module not found" });
      }
      res.status(200).json(modulesObj);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const courseModulesController = new CourseModule();
module.exports = courseModulesController;
