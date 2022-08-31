// boblioteca de leitura e escrita em arquivos do node.js
import fs from "fs";

// método writwFile é responsável por escrever em um arquivo e se o arquivo não existir ele cria;
fs.writeFile("teste.txt", "bla bla bla", function (err) {
  if (err) {
    console.log(err);
  } else {
    // método appendFile vai acrescetar o conteúdo no final;
    fs.appendFile("teste.txt", "\nteste appendFile", function (err) {
      if (err) {
        console.log(err);
      } else {
        fs.readFile("teste.txt", "UTF-8", function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
