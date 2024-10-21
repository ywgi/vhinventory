"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var vehicleController_1 = require("../controllers/vehicleController");
var router = express_1.default.Router();
router.get("/", vehicleController_1.getVehicles);
exports.default = router;
