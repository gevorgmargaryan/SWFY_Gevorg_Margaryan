import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { ClientModel } from './models/client.model';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';

@Resolver(() => ClientModel)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation(() => ClientModel)
  createClient(
    @Args('createClientInput') createClientInput: CreateClientInput,
  ) {
    return this.clientService.create(createClientInput);
  }

  @Query(() => [ClientModel], { name: 'clients' })
  findAll() {
    return this.clientService.findAll();
  }

  @Query(() => ClientModel, { name: 'client' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.clientService.findOne(id);
  }

  @Mutation(() => ClientModel)
  updateClient(
    @Args('updateClientInput') updateClientInput: UpdateClientInput,
  ) {
    return this.clientService.update(updateClientInput.id, updateClientInput);
  }

  @Mutation(() => ClientModel)
  removeClient(@Args('id', { type: () => String }) id: string) {
    return this.clientService.remove(id);
  }
}
