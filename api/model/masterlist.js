const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const masterSchema = new Schema({
  m_id: {
    type: Number,
    required: true,
  },
  m_name: {
    type: String,
    require: true,
  },
});

const master = mongoose.model("master", masterSchema);
module.exports = master;
