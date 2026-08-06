import { existsSync, copyFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { app } from 'electron';
import { databaseUrl, ensureAppDataPath } from './paths';

const require = createRequire(import.meta.url);
const { PrismaClient } = loadPrismaPackage();

type PrismaClientInstance = any;

let prisma: PrismaClientInstance | undefined;

export function getPrisma(): PrismaClientInstance {
  if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = databaseUrl();
  }

  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
}

export function ensureDatabaseFile(): void {
  const sqlitePath = join(ensureAppDataPath(), 'defrag.sqlite');
  mkdirSync(dirname(sqlitePath), { recursive: true });

  if (!existsSync(sqlitePath)) {
    const bundled = app.isPackaged
      ? join(process.resourcesPath, 'prisma', 'dev.db')
      : join(process.cwd(), 'prisma', 'dev.db');
    if (existsSync(bundled)) {
      copyFileSync(bundled, sqlitePath);
    }
  }
}

export async function ensureDatabaseSchema(): Promise<void> {
  const db = getPrisma();

  await db.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Document" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "googleFileId" TEXT,
      "title" TEXT NOT NULL,
      "mimeType" TEXT NOT NULL,
      "plainText" TEXT NOT NULL,
      "summary" TEXT,
      "sourceUrl" TEXT,
      "importedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await db.$executeRawUnsafe(`CREATE UNIQUE INDEX IF NOT EXISTS "Document_googleFileId_key" ON "Document"("googleFileId");`);

  await db.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Concept" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "title" TEXT NOT NULL,
      "normalizedTitle" TEXT NOT NULL,
      "summary" TEXT NOT NULL,
      "aliasesJson" TEXT NOT NULL DEFAULT '[]',
      "relatedJson" TEXT NOT NULL DEFAULT '[]',
      "examplesJson" TEXT NOT NULL DEFAULT '[]',
      "confidence" REAL NOT NULL DEFAULT 0.7,
      "embeddingJson" TEXT NOT NULL DEFAULT '[]',
      "duplicateOfId" TEXT,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await db.$executeRawUnsafe(`CREATE UNIQUE INDEX IF NOT EXISTS "Concept_normalizedTitle_key" ON "Concept"("normalizedTitle");`);

  await db.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "DocumentConcept" (
      "documentId" TEXT NOT NULL,
      "conceptId" TEXT NOT NULL,
      "excerpt" TEXT,
      "confidence" REAL NOT NULL DEFAULT 0.7,
      PRIMARY KEY ("documentId", "conceptId"),
      CONSTRAINT "DocumentConcept_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT "DocumentConcept_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept" ("id") ON DELETE CASCADE ON UPDATE CASCADE
    );
  `);

  await db.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Setting" (
      "key" TEXT NOT NULL PRIMARY KEY,
      "value" TEXT NOT NULL,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

function loadPrismaPackage(): { PrismaClient: new () => any } {
  if (app.isPackaged) {
    const unpackedClient = join(process.resourcesPath, 'app.asar.unpacked', 'prisma', 'generated-client', 'default.js');
    const appClient = join(process.resourcesPath, 'app', 'prisma', 'generated-client', 'default.js');
    return require(existsSync(unpackedClient) ? unpackedClient : appClient) as {
      PrismaClient: new () => any;
    };
  }

  return require('@prisma/client') as { PrismaClient: new () => any };
}
