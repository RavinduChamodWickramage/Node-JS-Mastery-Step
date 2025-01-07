import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname, 'mySelf.txt'), (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data.toString());
});