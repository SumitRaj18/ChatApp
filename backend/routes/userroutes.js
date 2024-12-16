import express from 'express'
import secureToken from '../middleware/secureToken.js';
import {signup,login, logout,allUsers} from '../controllers/user.controller.js'
const router= express.Router();
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/allusers",secureToken, allUsers);




export default router;