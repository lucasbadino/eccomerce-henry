import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from 'dotenv'
import { registerAs } from "@nestjs/config";

dotenvConfig({ path: '.env.development' })
const dbConfig = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
    // logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    // dropSchema: true,
}

export const postgresConfig = registerAs('typeorm', () => dbConfig)
export const conectDataSource = new DataSource(dbConfig as DataSourceOptions)