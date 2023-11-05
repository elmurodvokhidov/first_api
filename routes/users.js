import express from "express";
import { createUser, getUser, findUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// Get all users
router.get('/', getUser);

// Add new user
router.post('/', createUser);

// Find user
router.get('/:id', findUser);

// Delete user
router.delete('/:id', deleteUser);

// Update user
router.patch('/:id', updateUser);

export default router;