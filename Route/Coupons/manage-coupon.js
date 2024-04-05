const express = require("express");
const router = express.Router();
const CouponController = require("../../Controller/Coupons/manage-coupon");

router.post("/addcoupon", CouponController.addCoupon);
// router.put(
//   "/addvideobymoduleid/:id",
//   CouponController.addVideoByModuleId
// );
router.get("/getallcoupon", CouponController.getAllCoupon);
router.get("/getcouponbyid/:id", CouponController.getCouponById);

module.exports = router;
