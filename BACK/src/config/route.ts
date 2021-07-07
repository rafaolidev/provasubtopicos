import { Router } from "express";
import { PcController } from "../controllers/PcController";

const router = Router();
const pcController = new PcController();

router.post("/computador/cadastrar", pcController.cadastrar);
router.get("/computador/listar", pcController.listar);
router.delete("/computador/remover/:_id", pcController.remover);

export { router };