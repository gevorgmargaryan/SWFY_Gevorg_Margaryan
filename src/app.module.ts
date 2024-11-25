import { Module } from '@nestjs/common';
import { AppController } from './probe/app.controller';
import { AppService } from './probe/app.service';
import { GraphQLModule, registerEnumType } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { InvoiceModule } from './invoice/invoice.module';
import { ErrorCode } from './common/enum/error.code';
import { DatabaseModule } from './database/postgres/modules/postgress.database';
import { ClientModule } from './client/client.module';

registerEnumType(ErrorCode, {
  name: 'ErrorCode',
});
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    InvoiceModule,
    DatabaseModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
