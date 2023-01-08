import express, {Router, Express} from 'express';
import cors from 'cors';
import { api as autos } from './routes/auto.route';
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

        //TODAS LAS RUTAS
        this.paths = {
            autos: '/autos'
        }

        //LLAMADA A LOS METODOS
        this.connectionDB();
        this.middleware();
        this.routes();
        this.router.use('/', this.app); //rutas del microservicio
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
        this.app.use(this.paths.autos, autos)
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.clear();
            console.log('WELCOME TO MICROSERVICE OF AUTOS')
            console.log(`Server running at port http:localhost:${this.port}/autos`);
        })
    }
}