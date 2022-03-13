import { PostgresConfirmAccountRepository } from '@modules/accounts/repositories/implementations/PostgresHelloHorldRepositories';

import { ConfirmAccountController } from './HelloWorld.Controller';
import { HelloWorldUseCase } from './HelloWorldUseCase';

const postgresConfirmAccountRepository = new PostgresConfirmAccountRepository();

const confirmAccountUseCase = new HelloWorldUseCase(
  postgresConfirmAccountRepository,
);

const confirmAccountController = new ConfirmAccountController(confirmAccountUseCase);

export { confirmAccountController };
