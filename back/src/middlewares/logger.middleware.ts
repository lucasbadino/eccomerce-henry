import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log(req, res);
//         next();

//     }
// }
export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
    let fecha = new Date();
    console.log(`${fecha.toLocaleString()}, Metodo: ${req.method}, Url: ${req.url}`);
    next();

}
