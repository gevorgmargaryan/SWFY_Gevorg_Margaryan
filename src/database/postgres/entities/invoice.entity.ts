import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNumber, IsString } from 'class-validator';

@Entity('invoices')
export class InvoiceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name?: string;

  @Column({ type: 'jsonb', nullable: true, name: 'line_items' })
  lineItems?: LineItems[];

  @Column({ type: 'jsonb', nullable: true, name: 'customer_data' })
  customerData?: object;

  @Column({ type: 'varchar', nullable: true })
  status?: string;

  @Column({ type: 'varchar', nullable: true, name: 'quote_number' })
  quoteNumber?: string;

  @CreateDateColumn({ nullable: true, name: 'issued_at' })
  issuedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  insertCreated() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  insertUpdated() {
    this.updatedAt = new Date();
  }
}

export class LineItems {
  @IsString()
  description: string;

  @IsNumber({ allowNaN: false, allowInfinity: false })
  amount: number;

  @IsNumber({ allowNaN: false, allowInfinity: false })
  price: number;

  @IsNumber({ allowNaN: false, allowInfinity: false })
  units: number;

  @IsNumber({ allowNaN: false, allowInfinity: false })
  vat: number;
}
