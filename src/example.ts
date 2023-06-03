import fs from "node:fs";
import * as readline from "node:readline";

const stream = fs.createReadStream("src/assets/arquivo.txt", "utf8");

const rl = readline.createInterface({ input: stream });

rl.on("line", (line) => {
  // Processar cada linha de dados aqui
  console.log(`Linha lida: ${line}`);
});

rl.on("close", () => {
  console.log("Leitura finalizada!");
});

stream.on("error", (error) => {
  console.error(`Ocorreu um erro na leitura: ${error}`);
});
