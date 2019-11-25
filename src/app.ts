import express, { Application } from "express";
import morgan from 'morgan';
import postRoutes from "./Routes/posts.routes";

export class App{

  app:Application;

  constructor(private port?:number){
    this.app = express();
    this.settings()
    this.listen()
    this.routes()
  }

  settings(){
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  async listen(){
    await this.app.listen(this.app.get("port"));
    console.log("running on", this.app.get("port"))
  }

  middlewares(){
    this.app.use(morgan("dev"));
    this.app.use(express.json())
  }

  routes(){
    this.app.use("/post", postRoutes)
  }

}
