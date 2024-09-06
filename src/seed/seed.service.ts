import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FetchAdapter } from '../common/adapters/fecth.adapter';
import { PokeResponse } from './interfaces/poke.response.interface';
import { Pokemon } from './../pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {
  private readonly fetch: FetchAdapter = new FetchAdapter();

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async populateDB() {
    await this.pokemonModel.deleteMany({}).exec();

    const resp = await this.fetch.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemons = resp.results.map(({ name, url }) => ({
      name,
      no: +url.split('/')[6],
    }));

    await this.pokemonModel.insertMany(pokemons);

    return 'Seed executed';
  }
}
