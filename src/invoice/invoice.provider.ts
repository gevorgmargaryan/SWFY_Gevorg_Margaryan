import { InvoiceEntity } from 'src/database/postgres/entities';
import { DataSource } from 'typeorm';

export const invoiceProviders = [
  {
    provide: 'INVOICE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(InvoiceEntity),
    inject: ['DATA_SOURCE'],
  },
];
