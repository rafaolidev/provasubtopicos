console.clear();

import express from "express";
import cors from "cors";
import {mongoose} from "./config/database";
import { router } from "./config/route"

const app = express();
const db = mongoose;
app.use(cors());
app.use(express.json());
app.use(router);


app.listen(3000, () =>{
    console.log("Servidor local incializado na porta:3000")
});

