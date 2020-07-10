import { Args, Query, Resolver } from "@nestjs/graphql";
import { PokemonQl } from './pokemon.ql';
import { PokemonApi } from "../../../generated-sources/openapi";

@Resolver(of => PokemonQl)
export class PokemonResolver {
  private api = new PokemonApi();
  
  @Query(_ => [PokemonQl])
  public async pokemon() {
    const all = await this.api.pokemonControllerGetAllPokemon();
    return all.data.pokemon;
  }

  @Query(_ => PokemonQl)
  public async singlePokemon(@Args() id: string) {
    return await this.api.pokemonControllerGetPokemonById(id);
  }
}
