import { Module } from '@nestjs/common';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonClientModule } from '@endurance/grpc-pokemon-server';

@Module({
  imports: [
    PokemonClientModule.forRoot({
      url: 'localhost:5000',
    }),
  ],
  providers: [PokemonResolver],
})
export class PokemonModule {}
