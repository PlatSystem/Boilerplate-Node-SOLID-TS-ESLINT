import { IConfirmAccountRepository } from '../IHelloHorldRepository';

class PostgresConfirmAccountRepository implements IConfirmAccountRepository {
  getHelloWorldUseCase(): string {
    const hello = 'hello Word';

    return hello;
  }
}

export { PostgresConfirmAccountRepository };
