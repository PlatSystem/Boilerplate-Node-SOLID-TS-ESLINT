import logger from '@config/configLogger';

import { transporter } from '../config/configNodeMailer';

export interface IPropsToEmail {
  toEmail: string;
  cod_email: string;
}

const sendConfirmEmail = async ({ cod_email, toEmail }: IPropsToEmail) => {
  transporter.sendMail({
    from: 'Comunicação Madrigar - <richardsendemail@gmail.com>',
    to: [`${toEmail}`],
    text: 'Texto do E-mail',
    subject: 'Confirmação de email Madrigar',
    html: `
    <html>
      <body>
        <strong>Confirmar codigo: ${cod_email}</strong>
      </body>
    </html>
    `,
  }).then(() => {
    logger.info('Email enviado com sucesso');
    const success = 'Email enviado com sucesso';
    return success;
  }).catch((error) => {
    logger.fatal(error);
    const fatal = 'Internal Server error';
    return fatal;
  });
};

export { sendConfirmEmail };
