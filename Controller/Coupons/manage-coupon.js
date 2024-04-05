const couponSchema = require("../../Model/Coupons/manage-coupon");

class CouponModule {
  async addCoupon(req, res) {
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

      const newCoupon = new couponSchema({
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
      await newCoupon.save();
      res.status(200).json({
        status: true,
        success: "Coupon Added",
        data: newCoupon,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllCoupon(req, res) {
    try {
      const couponList = await couponSchema.find();
      res.status(200).json({
        status: true,
        data: couponList,
        count: couponList.length,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: `Server Error` });
    }
  }

  async getCouponById(req, res) {
    try {
      const couponObj = await couponSchema.findById(req.params.id);
      if (!couponObj) {
        return res.status(404).json({ message: "Coupon not found" });
      }
      res.status(200).json(couponObj);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const CouponController = new CouponModule();
module.exports = CouponController;
