import { Module } from '@nestjs/common'
import { AuthorsResolver } from './graphql/resolvers/authors.resolver'
import { DatabaseModule } from '@/database/database.module'
import { PrismaService } from '@/database/prisma/prisma.service'
import { AuthorsPrismaRepository } from './repositories/authors-prisma.repository'
import { ListAuthorsUsecase } from './usecases/list-authors.usecase'

@Module({
  imports: [DatabaseModule],
  providers: [
    AuthorsResolver,
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'AuthorsRepository',
      useFactory: (prisma: PrismaService) => {
        return new AuthorsPrismaRepository(prisma)
      },
      inject: ['PrismaService'],
    },
    {
      provide: ListAuthorsUsecase.Usecase,
      useFactory: (authosRepository: AuthorsPrismaRepository) => {
        return new ListAuthorsUsecase.Usecase(authosRepository)
      },
      inject: ['AuthorsRepository'],
    },
  ],
})
export class AuthorsModule {}
