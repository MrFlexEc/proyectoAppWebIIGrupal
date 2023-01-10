import express, {Router, Express} from 'express';
import cors from 'cors';
import { api as canchas } from './routes/cancha.route';
import { dbConnection } from './database/db';

export class Server{
    app: Router;
    router: Router;
    port: Number;
    paths: { [pass: string]:string };

    private _express: Express;

    constructor(){
        this.app = Router();
        this.router = Router();
        this.port = Number(process.env.PORT || 3200);

        //rutas
        this.paths = {
            canchas: '/cancha'
        }

        //metodos
        this.connectionDB();
        this.middleware();
        this.routes(); 
        
        //microservicio
        this.router.use('/', this.app);
        
        this._express = express().use(this.router);
    }

    private async connectionDB(){
        await dbConnection();
    }

    private middleware(){
        this.app.use(cors());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
    }

    private routes(){
        this.app.use(this.paths.canchas, canchas)
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.clear();
            console.log('WELCOME TO MICROSERVICE OF CANCHAS')
            console.log(`Server running at port http:localhost:${this.port}/cancha`);
        })
    }
}