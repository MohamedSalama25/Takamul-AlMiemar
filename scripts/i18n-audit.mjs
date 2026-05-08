import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const dictionariesDir = path.join(repoRoot, "src", "shared", "dictionaries");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function collectPaths(value, prefix = "") {
  const paths = new Map();

  const walk = (node, currentPath) => {
    if (Array.isArray(node)) {
      paths.set(currentPath, "array");
      node.forEach((item, idx) => walk(item, `${currentPath}[${idx}]`));
      return;
    }
    if (isPlainObject(node)) {
      paths.set(currentPath, "object");
      for (const [key, child] of Object.entries(node)) {
        const nextPath = currentPath ? `${currentPath}.${key}` : key;
        walk(child, nextPath);
      }
      return;
    }
    paths.set(currentPath, typeof node);
  };

  walk(value, prefix);
  return paths;
}

function diffDictionaries({ baseName, baseDict, compareName, compareDict }) {
  const basePaths = collectPaths(baseDict);
  const comparePaths = collectPaths(compareDict);

  const missingInCompare = [];
  const typeMismatches = [];

  for (const [p, baseType] of basePaths.entries()) {
    if (!comparePaths.has(p)) {
      missingInCompare.push(p);
      continue;
    }
    const compareType = comparePaths.get(p);
    if (baseType !== compareType) {
      typeMismatches.push({ path: p, [baseName]: baseType, [compareName]: compareType });
    }
  }

  return { missingInCompare, typeMismatches };
}

const enPath = path.join(dictionariesDir, "en.json");
const arPath = path.join(dictionariesDir, "ar.json");

const en = readJson(enPath);
const ar = readJson(arPath);

const enVsAr = diffDictionaries({ baseName: "en", baseDict: en, compareName: "ar", compareDict: ar });
const arVsEn = diffDictionaries({ baseName: "ar", baseDict: ar, compareName: "en", compareDict: en });

const issues = [];

if (enVsAr.missingInCompare.length) {
  issues.push({ title: "Missing in ar.json (present in en.json)", items: enVsAr.missingInCompare });
}
if (arVsEn.missingInCompare.length) {
  issues.push({ title: "Missing in en.json (present in ar.json)", items: arVsEn.missingInCompare });
}

const allTypeMismatches = [...enVsAr.typeMismatches, ...arVsEn.typeMismatches].filter(
  (m, idx, arr) => arr.findIndex((x) => x.path === m.path) === idx
);
if (allTypeMismatches.length) {
  issues.push({
    title: "Type mismatches between dictionaries",
    items: allTypeMismatches.map((m) => `${m.path} (en:${m.en ?? "?"}, ar:${m.ar ?? "?"})`),
  });
}

if (!issues.length) {
  console.log("i18n audit: OK (en.json and ar.json have matching key paths/types).");
  process.exit(0);
}

console.log("i18n audit: FOUND ISSUES\n");
for (const issue of issues) {
  console.log(`- ${issue.title}: ${issue.items.length}`);
  for (const item of issue.items.slice(0, 200)) {
    console.log(`  - ${item}`);
  }
  if (issue.items.length > 200) {
    console.log(`  ...and ${issue.items.length - 200} more`);
  }
  console.log("");
}

process.exit(1);

