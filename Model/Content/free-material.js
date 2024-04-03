const mongoose = require("mongoose");

const freeMaterialSchema = new mongoose.Schema(
  {
    materialDocuments: [
      {
        documentImage: String,
      },
    ],
    materialType: String,
    youtubeLink: String,
  },
  {
    timestamps: true,
  }
);

const freeMaterial = mongoose.model("FreeMaterial", freeMaterialSchema);
module.exports = freeMaterial;
