import nodemailer from 'nodemailer';

import 'dotenv/config';
import logger from '../configLogger';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'richardsendemail@gmail.com',
    pass: 'Parana123Rm',
  },
  tls: { rejectUnauthorized: false },
});

transporter.verify((error, success) => {
  if (error) {
    return logger.fatal(`Error connection Gmail ${error}`);
  }

  logger.info('Server is connection to - Gmail - success');
  return success;
});

export { transporter };
