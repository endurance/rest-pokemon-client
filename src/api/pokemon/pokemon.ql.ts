import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Pokemon')
export class PokemonQl {
  @Field({ nullable: true })
  public name: string;

  @Field({ nullable: true })
  public url: string;
}
