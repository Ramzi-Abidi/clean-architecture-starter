import express from "express";
import auth from "../../routes/auth/auth";

const router = express.Router();
// auth router
router.use(auth);

export default router;
