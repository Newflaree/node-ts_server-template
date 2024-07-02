// Express
import { Router } from 'express';
// Controllers
import { sendEmailController } from '../controllers';


const router: Router = Router();

//TODO: SendEmail
router.post( '/contact', sendEmailController );



export default router;
