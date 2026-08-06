import fs from 'node:fs';
import path from 'node:path';

// 1. Check if all source files exist
const criticalFiles = [
  'package.json',
  'src/main/index.ts',
  'src/main/services/ai.ts',
  'src/renderer/src/main.tsx',
  'assets/icon.png'
];

console.log('--- 1. File Audit ---');
criticalFiles.forEach(file => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`${exists ? '✓' : '✗'} ${file}`);
});

// 2. Check package.json for consistency
console.log('\n--- 2. Package Config Audit ---');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log(`Product Name: ${pkg.build.productName}`);
console.log(`App ID: ${pkg.build.appId}`);
console.log(`Icon Config: ${pkg.build.icon || 'MISSING'}`);

const requiredDeps = ['pdf-parse', 'mammoth', '@prisma/client', 'lucide-react'];
requiredDeps.forEach(dep => {
  const inDeps = pkg.dependencies[dep] || pkg.devDependencies[dep];
  console.log(`${inDeps ? '✓' : '✗'} Dependency: ${dep}`);
});

// 3. Simulate Synthesis Logic (Testing grouping and scoring)
console.log('\n--- 3. Synthesis Logic Simulation ---');
function calculateSimilarity(s1, s2) {
  const words1 = new Set(s1.toLowerCase().split(/\s+/));
  const words2 = new Set(s2.toLowerCase().split(/\s+/));
  const intersection = new Set([...words1].filter(x => words2.has(x)));
  return intersection.size / Math.max(words1.size, words2.size);
}

const mockRawSuggestions = [
  { sectionId: 'Experience', suggestedAddition: 'I managed a team of 5 people.', sourceDocumentId: 'doc1' },
  { sectionId: 'Experience', suggestedAddition: 'Managed a small team of five individuals.', sourceDocumentId: 'doc2' },
  { sectionId: 'Skills', suggestedAddition: 'Proficient in Python.', sourceDocumentId: 'doc3' }
];

const grouped = [];
const processedIndices = new Set();

for (let i = 0; i < mockRawSuggestions.length; i++) {
  if (processedIndices.has(i)) continue;
  const current = mockRawSuggestions[i];
  const group = {
    ...current,
    sourceDocumentIds: [current.sourceDocumentId],
    frequency: 1,
    voiceMatchScore: 90
  };
  for (let j = i + 1; j < mockRawSuggestions.length; j++) {
    if (processedIndices.has(j)) continue;
    if (current.sectionId === mockRawSuggestions[j].sectionId && 
        calculateSimilarity(current.suggestedAddition, mockRawSuggestions[j].suggestedAddition) > 0.5) {
      group.sourceDocumentIds.push(mockRawSuggestions[j].sourceDocumentId);
      group.frequency++;
      processedIndices.add(j);
    }
  }
  grouped.push(group);
  processedIndices.add(i);
}

console.log(`Input suggestions: ${mockRawSuggestions.length}`);
console.log(`Grouped suggestions: ${grouped.length}`);
if (grouped.length === 2 && grouped[0].frequency === 2) {
    console.log('✓ Grouping logic working correctly');
} else {
    console.log('✗ Grouping logic error');
}

console.log('\n--- Audit Complete ---');
