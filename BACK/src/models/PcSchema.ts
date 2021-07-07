import { model, Schema } from "mongoose";

const pcSchema = new Schema(
    {
        dono: {
            type: String,
            required: [true, "Dono Obrigatório"],
        },
        placamae: {
            type: String,
            required: [true, "Placa Mãe é Obrigatória"],
        },
        processador: {
            type: String,
            required: [true, "Processador é Obrigatorio"],
        },
        memoria: {
            type: Number,
            required: [true, "Memória é Obrigatoria"],
        },
        armazenamento: {
            type: String,
            required: [true, "Tipo de Armazenamento é Obrigatorio"],
        },
        fonte: {
            type: String,
            required: [true, "Fonte de Alimentação é Obrigatorio"],
        },
    },
    {
        timestamps: true,
    }
);

export default model("pc", pcSchema);
