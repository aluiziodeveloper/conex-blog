import { ArgsType, Field, Int } from '@nestjs/graphql'

@ArgsType()
export class SearchParamsArgs {
  @Field(() => Int, { nullable: true })
  page?: number

  @Field(() => Int, { nullable: true })
  perPage?: number

  @Field({ nullable: true })
  sort?: string

  @Field({ nullable: true })
  sortDir?: 'asc' | 'desc'

  @Field({ nullable: true })
  filter?: string
}
