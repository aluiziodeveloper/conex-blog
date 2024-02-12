import { Args, Query, Resolver } from '@nestjs/graphql'
import { Author } from '../models/author'
import { Inject } from '@nestjs/common'
import { ListAuthorsUsecase } from '@/authors/usecases/list-authors.usecase'
import { SearchParamsArgs } from '../args/search-params.args'

@Resolver(() => Author)
export class AuthorsResolver {
  @Inject(ListAuthorsUsecase.Usecase)
  private listAuthorUseCase: ListAuthorsUsecase.Usecase

  @Query(() => [Author])
  authors(@Args() { page, perPage, sort, sortDir, filter }: SearchParamsArgs) {
    return this.listAuthorUseCase.execute({
      page,
      perPage,
      sort,
      sortDir,
      filter,
    })
  }
}
