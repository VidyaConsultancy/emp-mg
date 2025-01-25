import { config as dontenvConfig } from 'dotenv';

function parseEnv(filePath: string) {
  console.debug(`Resolving env file ${filePath} relative to ${process.cwd()}`);

  const config = dontenvConfig({
    path: filePath,
  });

  if (config.error) {
    console.warn(`Failed to parse ${filePath}`, config.error);
  }

  if (config.parsed) {
    console.debug(
      `Successfully parsed ${filePath}: ${Object.keys(config.parsed).join(', ')}`,
    );
  }
}

parseEnv('.env');

// parseEnv('.env.local');

const { DB_USER, DB_PASS, DB_PORT, DB_HOST, DB_NAME } = process.env;

const connectionConfig = {
  host: DB_HOST || 'localhost',
  port: Number(DB_PORT) || 3306,
  username: DB_USER || 'user',
  password: DB_PASS,
  database: DB_NAME || 'emp_db',
};

export default connectionConfig;
