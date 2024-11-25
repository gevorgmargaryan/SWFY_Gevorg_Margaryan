import { Inject, Injectable } from '@nestjs/common';
import { CreateInvoiceArgs } from './dto/create.invoice.args';
import { InvoiceModel } from './models/invoice.model';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { InvoiceEntity } from 'src/database/postgres/entities';

@Injectable()
export class InvoiceService {
  constructor(
    @Inject('INVOICE_REPOSITORY')
    private invoiceRepository: Repository<InvoiceEntity>,
  ) {}

  public async findById({ id }: { id: string }) {
    const invoice: InvoiceModel = {
      id: id,
      name: 'Invoice',
      status: 'Draft',
      quoteNumber: '1',
      lineItems: [],
      deletedAt: null,
      issuedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return plainToInstance(InvoiceModel, invoice);
  }

  public async create(args: CreateInvoiceArgs) {
    const invoice: InvoiceModel = {
      ...args,
      name: 'Invoice',
      status: 'Draft',
      quoteNumber: '1',
      lineItems: args.line_items,
      issuedAt: new Date(),
      customerData: args.customerData,
    };

    return this.invoiceRepository.save(invoice);
  }
}
