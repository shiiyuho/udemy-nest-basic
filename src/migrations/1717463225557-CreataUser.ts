import {MigrationInterface, QueryRunner} from "typeorm";

export class CreataUser1717463225557 implements MigrationInterface {
    name = 'CreataUser1717463225557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "discription" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "description" TO "discription"`);
    }

}
