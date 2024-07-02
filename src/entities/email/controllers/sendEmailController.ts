// Express
import {
  Request,
  Response
} from 'express';
// Utils
import {
  logger,
  messages,
  statusCodes
} from '../../../utils';


/**
 * Handler description
 *
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const sendEmailController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {

    res.status( statusCodes.SUCCESS ).json({
      ok: true,
      message: 'sendEmailController'
    });
  
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailController' );

    res.status( statusCodes.SERVER_ERROR ).json({
      ok: false,
      message: messages.SERVER_ERROR
    });
  }
}

export default sendEmailController;
