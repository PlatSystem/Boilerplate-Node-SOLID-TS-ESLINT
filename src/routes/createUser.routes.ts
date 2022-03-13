import { Router } from 'express';

import { confirmAccountController } from '../modules/accounts/useCases/HelloWorld';

const routerCreateUser = Router();

routerCreateUser.get('/helloWorld', (request, response) => confirmAccountController.handle(request, response));

export { routerCreateUser };
