import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEntities1653949771426 implements MigrationInterface {
    name = 'CreateEntities1653949771426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "quantity" integer NOT NULL, "food_id" uuid NOT NULL, "order_id" uuid NOT NULL, CONSTRAINT "PK_02185da47c073158a934d3927dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."foods" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_cfc3f40c55e035b65019aa26990" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_d0a06e2222210bb9a50d83a6e7b" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_d0a06e2222210bb9a50d83a6e7b"`);
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_cfc3f40c55e035b65019aa26990"`);
        await queryRunner.query(`ALTER TABLE "public"."foods" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "details"`);
    }

}
