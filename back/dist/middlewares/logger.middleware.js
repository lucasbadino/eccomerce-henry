"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerGlobal = loggerGlobal;
function loggerGlobal(req, res, next) {
    let fecha = new Date();
    console.log(`${fecha.toLocaleString()}, Metodo: ${req.method}, Url: ${req.url}`);
    next();
}
//# sourceMappingURL=logger.middleware.js.map