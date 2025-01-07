import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { log } from "node:console";

// File path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//////// Callback API

import { appendFile, readFile, rm, writeFile } from "node:fs";

// Reading from a file
readFile(join(__dirname, "read.txt"), { encoding: "utf8" }, (err, data) => {
  if (err) {
    log("Callback API - Error reading file:", err);
  } else {
    log("Callback API - Read file content:", data);
  }
});

// Writing to a file
writeFile(
  join(__dirname, "write.txt"),
  "University of Kelaniya",
  { encoding: "utf8" },
  (err) => {
    if (err) {
      log("Callback API - Error writing to file:", err);
    } else {
      log("Callback API - File written successfully!");
    }
  }
);

// Appending to a file
appendFile(
  join(__dirname, "append.txt"),
  "University of Kelaniya\n",
  { encoding: "utf8" },
  (err) => {
    if (err) {
      log("Callback API - Error appending to file:", err);
    } else {
      log("Callback API - Data appended successfully!");
    }
  }
);

// Appending to a JavaScript file
appendFile(
  join(__dirname, "append.js"),
  `
const name = "Ravindu Wickramage";
const arr = [1, 2, 3, 4, 5];

console.log(name);
console.log(arr);
`,
  { encoding: "utf8" },
  (err) => {
    if (err) {
      log("Callback API - Error appending to JS file:", err);
    } else {
      log("Callback API - JS Data appended successfully!");
    }
  }
);

// Deleting a file
rm(join(__dirname, "remove.txt"), (err) => {
  if (err) {
    log("Callback API - Error deleting file:", err);
  } else {
    log("Callback API - File deleted successfully!");
  }
});

//////// Promise API

import {
  readFile as readPromise,
  writeFile as writePromise,
  appendFile as appendPromise,
  rm as rmPromise,
} from "node:fs/promises";

// Reading from a file
readPromise(join(__dirname, "read.txt"), { encoding: "utf8" })
  .then((data) => {
    log("Promise API - Read file content:", data);
  })
  .catch((err) => {
    log("Promise API - Error reading file:", err);
  });

// Writing to a file
writePromise(join(__dirname, "write.txt"), "University of Kelaniya", {
  encoding: "utf8",
})
  .then(() => {
    log("Promise API - File written successfully");
  })
  .catch((err) => {
    log("Promise API - Error writing file:", err);
  });

// Writing to a JavaScript file
const code = async (data) => {
  try {
    await writePromise(join(__dirname, "append.js"), data, {
      encoding: "utf8",
    });
    log("Promise API - JavaScript file written successfully");
  } catch (err) {
    log("Promise API - Error writing JavaScript file:", err);
  }
};

code(`
const name = "Ravindu Wickramage";
const arr = [1, 2, 3, 4, 5];

console.log(name);
console.log(arr);
`);

// Appending to a file
appendPromise(join(__dirname, "append.txt"), "Ravindu Wickramage\n", {
  encoding: "utf8",
})
  .then(() => {
    log("Promise API - File appended successfully");
  })
  .catch((err) => {
    log("Promise API - Error appending file:", err);
  });

// Deleting a file
rmPromise(join(__dirname, "remove.txt"))
  .then(() => {
    log("Promise API - File deleted successfully");
  })
  .catch((err) => {
    log("Promise API - Error deleting file:", err);
  });
