import logger from '@config/configLogger';

import { IConfirmAccountRepository } from '../../repositories/IHelloHorldRepository';

class HelloWorldUseCase {
  constructor(private confirmAccountRepository: IConfirmAccountRepository) { }

  async execute() {
    const result = this.confirmAccountRepository.getHelloWorldUseCase();

    logger.info(result);
    return result;
  }
}

export { HelloWorldUseCase };
