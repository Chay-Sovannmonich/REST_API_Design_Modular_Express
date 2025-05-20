import { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser 
} from '../models/userModel.js';

export const listUsers = (req, res) => {
    res.json(getAllUsers());
};

export const showUser = (req, res) => {
    const user = getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const addUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = createUser({ name, email });
    res.status(201).json(newUser);
};

export const modifyUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    const updatedUser = updateUser(userId, { name, email });
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });

    res.json(updatedUser);
};

export const removeUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const success = deleteUser(userId);
    if (!success) return res.status(404).json({ error: 'User not found' });
    
    res.status(204).send();
};