import mongoose from "mongoose";

mongoose
    .connect(
        "mongodb+srv://rafaoli:reaper123@cluster0.nsam9.mongodb.net/cadPc",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Conectado em Database MongoDB");
    })
    .catch((erro) => {
        console.log(`Erro de conexão: ${erro}`);
    });

export { mongoose };
