import { Request, Response } from "express";
import PcSchema from "../models/PcSchema";

class PcController {
    async cadastrar(request: Request, response: Response) {
        try {
            const { dono } = request.body;
            if (await PcSchema.exists({ dono })) {
                response.status(400).json({ msg: "Dono já possui uma maquina em nosso sistema" });
            } else {
                const novopc = await PcSchema.create(request.body);
                response.status(201).json(novopc);
            }
        } catch {
            response.status(400).json({ msg: "Cadastro duplicado" });
        }
    }

    async listar(request: Request, response: Response) {
        response.status(200).json(await PcSchema.find());
    }
    async remover(request: Request, response: Response) {
        const { _id } = request.params;
        response.status(200).json(await PcSchema.findOneAndDelete({ _id }));
    }

}
export { PcController };