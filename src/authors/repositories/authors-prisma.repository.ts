import { PrismaService } from '@/database/prisma/prisma.service'
import { Author } from '../graphql/models/author'
import {
  IAuthorsRepository,
  SearchParams,
  SearchResult,
} from '../interfaces/authors.repository'
import { ICreateAuthor } from '../interfaces/create-author'

export class AuthorsPrismaRepository implements IAuthorsRepository {
  sortableFields: string[] = ['name', 'email', 'createdAt']

  constructor(private prisma: PrismaService) {}

  create(data: ICreateAuthor): Promise<Author> {
    throw new Error('Method not implemented.')
  }

  update(author: Author): Promise<Author> {
    throw new Error('Method not implemented.')
  }

  delete(id: string): Promise<Author> {
    throw new Error('Method not implemented.')
  }

  findById(id: string): Promise<Author> {
    throw new Error('Method not implemented.')
  }

  findByEmail(email: string): Promise<Author> {
    throw new Error('Method not implemented.')
  }

  search(params: SearchParams): Promise<SearchResult> {
    throw new Error('Method not implemented.')
  }

  get(id: string): Promise<Author> {
    throw new Error('Method not implemented.')
  }
}
