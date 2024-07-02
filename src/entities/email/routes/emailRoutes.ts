// Express
import { Router } from 'express';
// Express Validator
import { check } from 'express-validator';
// Controllers
import { sendEmailController } from '../controllers';


const router: Router = Router();

// SendEmail: api/email/contact
router.post(
  '/contact',
  [
    check( 'name', 'El nombre es necesario' ).not().isEmpty(),
    check( 'lastName', 'El apellido es necesario' ).not().isEmpty(),
    check( 'emailAddress', 'El correo electrónico es necesario' ).isEmail(),
    check( 'subject', 'El asunto es necesario' ).not().isEmpty(),
    check( 'message', 'El mensaje es necesario' ).not().isEmpty()
    // TODO: Validate fields middleware
  ],
  sendEmailController
);



export default router;
