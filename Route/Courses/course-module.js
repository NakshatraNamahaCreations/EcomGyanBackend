const express = require("express");
const router = express.Router();
const multer = require("multer");
const courseModulesController = require("../../Controller/Courses/course-module");

router.post("/addmodules", courseModulesController.addModules);
// router.put(
//   "/addvideobymoduleid/:id",
//   courseModulesController.addVideoByModuleId
// );
router.get("/getallmodules", courseModulesController.getAllModules);
router.get("/getmodulesbyid/:id", courseModulesController.getModuleById);

module.exports = router;
