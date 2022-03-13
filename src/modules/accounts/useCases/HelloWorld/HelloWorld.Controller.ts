import { Response, Request } from 'express';

import { HelloWorldUseCase } from './HelloWorldUseCase';

class ConfirmAccountController {
  constructor(private confirmAccountController: HelloWorldUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const confirmar_cod = await this.confirmAccountController.execute();

    return response.json({ confirmar_cod });
  }
}

export { ConfirmAccountController };
