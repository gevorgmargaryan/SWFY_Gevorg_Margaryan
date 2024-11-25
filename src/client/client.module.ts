import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { clientProviders } from './client.provider';
import { DatabaseModule } from 'src/database/postgres/modules/postgress.database';

@Module({
  providers: [...clientProviders, ClientResolver, ClientService],
  imports: [DatabaseModule],
})
export class ClientModule {}
