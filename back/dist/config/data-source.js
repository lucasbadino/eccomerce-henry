"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectDataSource = exports.postgresConfig = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const config_1 = require("@nestjs/config");
(0, dotenv_1.config)({ path: '.env.development' });
const dbConfig = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
};
exports.postgresConfig = (0, config_1.registerAs)('typeorm', () => dbConfig);
exports.conectDataSource = new typeorm_1.DataSource(dbConfig);
//# sourceMappingURL=data-source.js.map