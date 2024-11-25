import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { description: 'Name of the client' })
  name: string;
}
