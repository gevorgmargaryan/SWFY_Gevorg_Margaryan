import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class InvoiceTableUpdates1732555271249 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('invoices', [
      new TableColumn({
        name: 'status',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        isNullable: true,
      }),
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        isNullable: true,
      }),
      new TableColumn({
        name: 'quote_number',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'issued_at',
        type: 'timestamp',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('invoices');
  }
}
