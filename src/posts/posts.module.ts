import { DatabaseModule } from '@/database/database.module'
import { PrismaService } from '@/database/prisma/prisma.service'
import { Module } from '@nestjs/common'
import { PostsPrismaRepository } from './repositories/posts-prisma.repository'

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'PostsRepository',
      useFactory: (prismaService: PrismaService) => {
        return new PostsPrismaRepository(prismaService)
      },
      inject: ['PrismaService'],
    },
  ],
})
export class PostsModule {}
