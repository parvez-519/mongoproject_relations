const appConst = require("../constant");
const masterSchema = require("../model/masterlist");

const addmaster = async (req, res) => {
    const addMasterData = new masterSchema({
      m_id:req.body.m_id,
      m_name:req.body.m_name,
    });
    try {
      const resp = await addMasterData.save();
      res
        .status(201)
        .json({ status: appConst.status.success, response: resp, message: null });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({
          status: appConst.status.fail,
          response: null,
          message: err.message,
        });
    }
  };

  module.exports={addmaster}