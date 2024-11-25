import { Inject, Injectable } from '@nestjs/common';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { ClientEntity } from 'src/database/postgres/entities';
import { ClientModel } from './models/client.model';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: Repository<ClientEntity>,
  ) {}

  create(createClientInput: CreateClientInput) {
    return this.clientRepository.save(
      plainToInstance(ClientModel, createClientInput),
    );
  }

  findAll() {
    return this.clientRepository.find();
  }

  findOne(id: string) {
    return this.clientRepository.findOne({ where: { id } });
  }

  async update(id: string, updateClientInput: UpdateClientInput) {
    delete updateClientInput.id;
    await this.clientRepository.update({ id }, { ...updateClientInput });
    return this.findOne(id);
  }

  remove(id: string) {
    throw (`This action removes a #${id} client`);
  }
}
