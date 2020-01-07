import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1578325403060 implements MigrationInterface {
    name = 'Initialize1578325403060'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "activities" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "UQ_704a5fe2080d400189b76938cd1" UNIQUE ("type"), CONSTRAINT "PK_7f4004429f731ffb9c88eb486a8" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "location" ("id" SERIAL NOT NULL, "venue" character varying NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "perks" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "UQ_451e535e90c45489610ae107e26" UNIQUE ("type"), CONSTRAINT "PK_7858d2e37891967413d2010a278" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "speakers" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "gender" character varying(1) NOT NULL, "bio" character varying, "job_title" character varying NOT NULL, "image" bytea NOT NULL, CONSTRAINT "PK_b3818c94af77a0cf73403ecef14" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "start_datetime" TIMESTAMP NOT NULL, "end_datetime" TIMESTAMP NOT NULL, "attendees" integer, "female_attendees" integer, "media_link" character varying, "rsvp_link" character varying, "locationId" integer, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_e0974ea88afa9fdc9e8cecf5fa" ON "event" ("start_datetime") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ffb1bbbe118df62ea77c37293c" ON "event" ("end_datetime") `, undefined);
        await queryRunner.query(`CREATE TABLE "event_activities_activities" ("eventId" integer NOT NULL, "activitiesId" integer NOT NULL, CONSTRAINT "PK_b7c3b21e216fbf4080585f12e5a" PRIMARY KEY ("eventId", "activitiesId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_236b381aff81645ffd174ff4ed" ON "event_activities_activities" ("eventId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d720ae38b672ef5f6b5396062d" ON "event_activities_activities" ("activitiesId") `, undefined);
        await queryRunner.query(`CREATE TABLE "event_perks_perks" ("eventId" integer NOT NULL, "perksId" integer NOT NULL, CONSTRAINT "PK_8234c6c98eaddab93a5f4e995c2" PRIMARY KEY ("eventId", "perksId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_7fe6b9edcb86334d0bb6c55f89" ON "event_perks_perks" ("eventId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_bb919513bb4bdfe7df73683858" ON "event_perks_perks" ("perksId") `, undefined);
        await queryRunner.query(`CREATE TABLE "event_speakers_speakers" ("eventId" integer NOT NULL, "speakersId" integer NOT NULL, CONSTRAINT "PK_7225c7824b7f779010f78a8d72a" PRIMARY KEY ("eventId", "speakersId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_1de73d2affec4507638fa1e925" ON "event_speakers_speakers" ("eventId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_204523771f16bf46c1623f44f9" ON "event_speakers_speakers" ("speakersId") `, undefined);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_3abacb54776ac9da25ca49c609f" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "event_activities_activities" ADD CONSTRAINT "FK_236b381aff81645ffd174ff4edf" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "event_activities_activities" ADD CONSTRAINT "FK_d720ae38b672ef5f6b5396062d8" FOREIGN KEY ("activitiesId") REFERENCES "activities"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "event_perks_perks" ADD CONSTRAINT "FK_7fe6b9edcb86334d0bb6c55f89b" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "event_perks_perks" ADD CONSTRAINT "FK_bb919513bb4bdfe7df736838580" FOREIGN KEY ("perksId") REFERENCES "perks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "event_speakers_speakers" ADD CONSTRAINT "FK_1de73d2affec4507638fa1e9250" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "event_speakers_speakers" ADD CONSTRAINT "FK_204523771f16bf46c1623f44f9e" FOREIGN KEY ("speakersId") REFERENCES "speakers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "event_speakers_speakers" DROP CONSTRAINT "FK_204523771f16bf46c1623f44f9e"`, undefined);
        await queryRunner.query(`ALTER TABLE "event_speakers_speakers" DROP CONSTRAINT "FK_1de73d2affec4507638fa1e9250"`, undefined);
        await queryRunner.query(`ALTER TABLE "event_perks_perks" DROP CONSTRAINT "FK_bb919513bb4bdfe7df736838580"`, undefined);
        await queryRunner.query(`ALTER TABLE "event_perks_perks" DROP CONSTRAINT "FK_7fe6b9edcb86334d0bb6c55f89b"`, undefined);
        await queryRunner.query(`ALTER TABLE "event_activities_activities" DROP CONSTRAINT "FK_d720ae38b672ef5f6b5396062d8"`, undefined);
        await queryRunner.query(`ALTER TABLE "event_activities_activities" DROP CONSTRAINT "FK_236b381aff81645ffd174ff4edf"`, undefined);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_3abacb54776ac9da25ca49c609f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_204523771f16bf46c1623f44f9"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_1de73d2affec4507638fa1e925"`, undefined);
        await queryRunner.query(`DROP TABLE "event_speakers_speakers"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_bb919513bb4bdfe7df73683858"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_7fe6b9edcb86334d0bb6c55f89"`, undefined);
        await queryRunner.query(`DROP TABLE "event_perks_perks"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d720ae38b672ef5f6b5396062d"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_236b381aff81645ffd174ff4ed"`, undefined);
        await queryRunner.query(`DROP TABLE "event_activities_activities"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ffb1bbbe118df62ea77c37293c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_e0974ea88afa9fdc9e8cecf5fa"`, undefined);
        await queryRunner.query(`DROP TABLE "event"`, undefined);
        await queryRunner.query(`DROP TABLE "speakers"`, undefined);
        await queryRunner.query(`DROP TABLE "perks"`, undefined);
        await queryRunner.query(`DROP TABLE "location"`, undefined);
        await queryRunner.query(`DROP TABLE "activities"`, undefined);
    }

}
