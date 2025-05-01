import { config } from "dotenv";

config();

const variables = { ...process.env };

export default {
  port: variables.PORT,
  secretKeys: {
    jwtSecret: variables.JWT_SECRET,
    geminiAPIKey: variables.GEMINI_API_KEY,
  },
};
