"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Epress
const express_1 = __importDefault(require("express"));
// Cors
const cors_1 = __importDefault(require("cors"));
// Utils
const utils_1 = require("../utils");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = '3005';
        this.apiPaths = {
            email: '/api/email'
        };
        // Init middlewares
        this.middlewares();
        // Init Routes
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        console.log('Routes');
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