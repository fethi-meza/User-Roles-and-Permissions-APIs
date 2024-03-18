const { validationResult } = require("express-validator");
const Permission = require("../../Models/permissionsModel");

const addPermission = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Validation errors",
        errors: errors.array(),
      });
    }

    const { permission_name } = req.body;

    const isExists = await Permission.findOne({permission_name});

    if (isExists) {
      return res.status(200).json({
        success: false,
        msg: "Permissions Name already exists!",
      });
    }

    var obj = {
      permission_name,
    };

    if (req.body.default) {
      obj.is_default = parseInt(req.body.default);
    }

    const permission = new Permission(obj);

    const newPermission = await permission.save(); 
    
    return res.status(200).json({
      success: true,
      msg: "Permission added successfully",
      data: newPermission
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { addPermission };
