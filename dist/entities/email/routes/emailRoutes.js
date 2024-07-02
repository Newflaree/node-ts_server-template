"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = require("express");
// Controllers
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
//TODO: SendEmail
router.post('/contact', controllers_1.sendEmailController);
exports.default = router;
//# sourceMappingURL=emailRoutes.js.map