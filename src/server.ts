import express, { Application, Request, Response, NextFunction } from "express";

// const app: Application = express();
// const port = 3000;

// Body parsing Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get(
//   "/",
//   async (req: Request, res: Response): Promise<Response> => {
//       return res.status(200).send({
//           message: "Hello World!",
//       });
//   }
// );

// try {
//   app.listen(port, (): void => {
//       console.log(`Connected successfully on port ${port}`);
//   });
// } catch (error) {
//   console.error(`Error occured: ${error.message}`);
// }

  const app = require('./db/app.ts');
  const http = require('http');
  const port = 3000;

  const server = http.createServer(app);

  server.listen(port, function(err: any){
    if (err){
    console.log(err);
    }
    else{
    console.log(`Example app listening at http://localhost:${port}`)
    }
  });


