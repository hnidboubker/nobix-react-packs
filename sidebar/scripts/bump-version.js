#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Read version from .version file
const versionFile = path.join(rootDir, '.version');
const newVersion = fs.readFileSync(versionFile, 'utf-8').trim();

console.log(`📦 Updating version to ${newVersion}...`);

// Update package.json
const packageJsonPath = path.join(rootDir, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
console.log('✅ Updated package.json');

// Update README.md footer
const readmePath = path.join(rootDir, 'README.md');
let readme = fs.readFileSync(readmePath, 'utf-8');
readme = readme.replace(
  /\*\*Version:\*\* \d+\.\d+\.\d+/,
  `**Version:** ${newVersion}`
);
fs.writeFileSync(readmePath, readme);
console.log('✅ Updated README.md');

// Update CHANGELOG.md (update release notes link)
const changelogPath = path.join(rootDir, 'CHANGELOG.md');
let changelog = fs.readFileSync(changelogPath, 'utf-8');
// Update version reference in links section
changelog = changelog.replace(
  /\[0\.1\.0\]: https:\/\/github\.com\/hnidboubker\/nobix-react-packs\/releases\/tag\/v0\.1\.0/,
  `[${newVersion}]: https://github.com/hnidboubker/nobix-react-packs/releases/tag/v${newVersion}`
);
fs.writeFileSync(changelogPath, changelog);
console.log('✅ Updated CHANGELOG.md');

console.log(`\n✨ Version bumped to ${newVersion}`);
console.log('Next: git add . && git commit -m "chore: bump version to ' + newVersion + '"');
