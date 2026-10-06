import dotenv from 'dotenv';
import app from './app.js';
import { runSeedLogic } from './controllers/seed.controller.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  try {
    await runSeedLogic();
    console.log('✅ Database is ready');
  } catch (error) {
    console.error('❌ Auto-seed failed:', error.message);
  }
});
