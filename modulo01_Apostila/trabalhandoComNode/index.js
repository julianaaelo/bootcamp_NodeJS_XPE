import { promises as fs } from "fs";

writeReadJson();
async function writeReadJson() {
  try {
    const arrayCarros = ["Gol", "Pálio", "Uno"];
    const objeto = {
      carros: arrayCarros,
    };
    await fs.writeFile("teste.json", JSON.stringify(objeto)); // Escrita com valores iniciais
    // fs.writeFile("Arquivo criado", "objeto Json");
    // (a funça JSON.stringfy() converte o objeto json em string)

    const data = await JSON.parse(await fs.readFile("teste.json")); // Fez a leitura do conteúdo atual
    // fs.readFile("arquivo que será convertido");
    // a função JSON.parse() converte arquivo em string para json

    data.carros.push("sandero"); // atualizou o array de carros

    await fs.writeFile("teste.json", JSON.stringify(data)); // sobrescreveu o arquivo;
    // atualizou no json
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
