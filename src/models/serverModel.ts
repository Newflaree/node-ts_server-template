// Epress
import  express, { Application } from 'express';
// Cors
import cors from 'cors';
// Utils
import { logger } from '../utils';


class Server {
  public app: Application;
  public port: string;
  public apiPaths: any;
 
  constructor() {
    this.app = express();
    this.port = '3005';
    this.apiPaths = {
      email: '/api/email'
    };
  }


  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      logger.listenServerLogger( this.port );
    });
  }
}

export default Server;
