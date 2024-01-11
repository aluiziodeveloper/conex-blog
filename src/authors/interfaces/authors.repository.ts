import { Author } from '../graphql/models/author'
import { ICreateAuthor } from './create-author'

export interface IAuthorsRepository {
  create(data: ICreateAuthor): Promise<Author>
  update(author: Author): Promise<Author>
  delete(id: string): Promise<Author>
  findById(id: string): Promise<Author>
  findByEmail(email: string): Promise<Author>
  search(params: any): Promise<any>
  get(id: string): Promise<Author>
}
