export namespace CreateAuthorUsecase {
  export type Input = {
    name: string
    email: string
  }

  export type Output = {
    id: string
    name: string
    email: string
    createdAt: Date
  }

  export class Usecase {
    async execute(input: Input): Promise<Output> {}
  }
}
