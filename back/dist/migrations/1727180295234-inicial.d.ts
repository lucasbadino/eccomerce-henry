import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Inicial1727180295234 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
