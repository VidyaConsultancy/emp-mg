import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNameColumn1738038245859 implements MigrationInterface {
    name = 'AddNameColumn1738038245859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`name\``);
    }

}
