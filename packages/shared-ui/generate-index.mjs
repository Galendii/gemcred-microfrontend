import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// emula __dirname para ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsJsonPath = path.resolve(__dirname, "components.json");
const componentsDir = path.resolve(__dirname, "src/components/ui");
const indexFilePath = path.resolve(componentsDir, "index.ts");

const { components } = JSON.parse(fs.readFileSync(componentsJsonPath, "utf-8"));

const exportsLines = components.map((c) => {
  return `export { default as ${c.name} } from "./${c.path.replace(".tsx", "")}";`;
});

fs.writeFileSync(indexFilePath, exportsLines.join("\n") + "\n");

console.log(`Arquivo index.ts atualizado com ${components.length} exports.`);
