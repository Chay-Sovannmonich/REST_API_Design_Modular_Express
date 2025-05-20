import express from 'express';
import { requestLogger } from './middleware/logger.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

// Register middleware
app.use(requestLogger);

// Register routes
app.use('/users', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});