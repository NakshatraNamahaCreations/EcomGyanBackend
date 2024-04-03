const freeMaterialSchema = require("../../Model/Content/free-material");

class FreeMaterial {
  async addDocuments(req, res) {
    try {
      const { materialType } = req.body;
      let file = req.files.map((file) => ({
        documentImage: file.filename,
        originalName: file.originalname,
      }));
      const freeMaterial = new freeMaterialSchema({
        materialType,
        materialDocuments: file,
      });
      if (!file) {
        return res.status(500).json({
          status: 500,
          error: "Please select documents",
        });
      }
      await freeMaterial.save();
      res.status(200).json({
        status: true,
        success: "Material Added",
        data: freeMaterial,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async addYouTubeLink(req, res) {
    try {
      const { youtubeLink, materialType } = req.body;
      const link = new freeMaterialSchema({
        youtubeLink,
        materialType,
      });
      await link.save();
      res.status(200).json({
        status: true,
        success: "Link Added",
        data: link,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getAllDocuments(req, res) {
    try {
      const documents = await freeMaterialSchema.find({
        materialType: "documents",
      });
      res.status(200).json({
        status: true,
        data: documents,
        count: documents.length,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: `Server Error` });
    }
  }
  async getDocumentById(req, res) {
    try {
      const document = await freeMaterialSchema.findById(req.params.id);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
      res.status(200).json(document);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getAllVideo(req, res) {
    try {
      const video = await freeMaterialSchema.find({
        materialType: "video",
      });
      res.status(200).json({
        status: true,
        data: video,
        count: video.length,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: `Server Error` });
    }
  }
  async getVideoById(req, res) {
    try {
      const video = await freeMaterialSchema.findById(req.params.id);
      if (!video) {
        return res.status(404).json({ message: "Video not found" });
      }
      res.status(200).json(video);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const freeMaterialController = new FreeMaterial();
module.exports = freeMaterialController;
