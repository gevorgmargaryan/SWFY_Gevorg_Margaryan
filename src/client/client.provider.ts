
import { ClientEntity } from 'src/database/postgres/entities';
import { DataSource } from 'typeorm';

export const clientProviders = [
  {
    provide: 'CLIENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClientEntity),
    inject: ['DATA_SOURCE'],
  },
];
