import express from 'express';
import {
    listUsers,
    showUser,
    addUser,
    modifyUser,
    removeUser

} from '../controllers/userController.js';

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', showUser);
router.post('/', addUser);
router.put('/:id', modifyUser);
router.delete('/:id', removeUser);

export default router;