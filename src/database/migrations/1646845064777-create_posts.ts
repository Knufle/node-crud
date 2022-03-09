import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPosts1646845064777 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'title', 
                    type: 'varchar', 
                },
                {
                    name: 'description', 
                    type: 'text', 
                },
                {
                    name: 'content', 
                    type: 'text', 
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts');
    }

}
