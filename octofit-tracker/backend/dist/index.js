import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker';
app.use(express.json());
app.get('/health', (_request, response) => {
    response.json({ status: 'ok' });
});
async function start() {
    await mongoose.connect(mongoUri);
    app.listen(port, () => {
        console.log(`Backend listening on http://localhost:${port}`);
    });
}
start().catch((error) => {
    console.error('Failed to start backend:', error);
    process.exit(1);
});
