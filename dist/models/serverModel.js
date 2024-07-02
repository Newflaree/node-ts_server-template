"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Epress
const express_1 = __importDefault(require("express"));
// Utils
const utils_1 = require("../utils");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = '3005';
        this.apiPaths = {
            email: '/api/email'
        };
    }
    listen() {
        this.app.listen(this.port, () => {
            console.clear();
            utils_1.logger.listenServerLogger(this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=serverModel.js.map