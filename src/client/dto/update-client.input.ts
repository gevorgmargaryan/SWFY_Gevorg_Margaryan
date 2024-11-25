import { CreateClientInput } from './create-client.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClientInput extends PartialType(CreateClientInput) {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'Name of the client' })
  name: string;
}
