import  express, { Application } from 'express';
import cors from 'cors';


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
      console.log( `Listening on port: ${ this.port }` );
    });
  }
}

export default Server;
