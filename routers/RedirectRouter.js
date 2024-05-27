import express from "express";
import RedirectController from "../controllers/ReditectController.js";

const RedirectRouter = express.Router();

RedirectRouter.get("/:id", RedirectController.redirect);

export default RedirectRouter;