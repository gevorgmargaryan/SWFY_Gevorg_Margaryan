import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class ClientModel extends BaseModel {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'Name of the client' })
  name: string;
}
