import { Module } from '@nestjs/common'
import { AuthorsResolver } from './graphql/resolvers/authors.resolver'
import { DatabaseModule } from '@/database/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [AuthorsResolver],
})
export class AuthorsModule {}
