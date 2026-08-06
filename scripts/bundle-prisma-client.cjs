const { cpSync, existsSync, mkdirSync, rmSync } = require('node:fs');
const { dirname, join } = require('node:path');

const source = join(process.cwd(), 'node_modules', '.prisma', 'client');
const destination = join(process.cwd(), 'prisma', 'generated-client');

if (!existsSync(source)) {
  throw new Error(`Prisma generated client was not found at ${source}. Run npm install or npm run prisma:generate first.`);
}

mkdirSync(dirname(destination), { recursive: true });
rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true });
