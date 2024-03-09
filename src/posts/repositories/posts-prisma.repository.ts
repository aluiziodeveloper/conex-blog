import { PrismaService } from '@/database/prisma/prisma.service'
import { Post } from '../graphql/models/post'
import { PostsRepository } from '../interfaces/posts.repository'
import { NotFoundError } from '@/shared/errors/not-found-error'

export class PostsPrismaRepository implements PostsRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: Omit<Post, 'id'>): Promise<Post> {
    throw new Error('Method not implemented.')
  }

  update(post: Post): Promise<Post> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string): Promise<Post> {
    return this.get(id)
  }

  findBySlug(slug: string): Promise<Post> {
    throw new Error('Method not implemented.')
  }

  async get(id: string): Promise<Post> {
    const post = await this.prismaService.post.findUnique({
      where: { id },
    })
    if (!post) {
      throw new NotFoundError(`Post not found using ID ${id}`)
    }
    return post
  }
}
