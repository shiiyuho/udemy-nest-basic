import {MigrationInterface, QueryRunner} from "typeorm";

export class CreataUser1717464739599 implements MigrationInterface {
    name = 'CreataUser1717464739599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "discription" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "description" TO "discription"`);
    }

}
