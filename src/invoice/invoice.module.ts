import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { invoiceProviders } from './invoice.provider';
import { DatabaseModule } from 'src/database/postgres/modules/postgress.database';

@Module({
  providers: [...invoiceProviders, InvoiceService, InvoiceResolver],
  imports: [DatabaseModule],
})
export class InvoiceModule {}
