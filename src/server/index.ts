import cors from "cors";
import express, { Application } from "express";
import 'dotenv/config';
import { routes } from "../routes";

class Server {
    private app : Application;
    private port : string | number = process.env.PORT || 4000;
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routes() {
        
        this.app.use(`/${process.env.API_VERSION}`, routes);
        this.app.get('/', (req, res) => {
            res.send("Mail microservice")
        })
    }

    async listen() {
        this.app.listen({port: this.port}, ()=>{
            
            console.log(`listening on port ${this.port}`);
        });
    }
}

export const server = new Server();