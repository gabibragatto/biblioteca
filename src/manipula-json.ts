// importar apenas as funções que precisamos utilizar do "fs"
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs";

// 1. Definição do Tipo de Dado (MODEL)
type Livro = {
    titulo: string;
    autor: string;
    ano: number;
    lidos: boolean;
};

// 2. Lista Inicial de Dados (Mock Data)
const livros: Livro[] = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, lidos: true },
    { titulo: "A revolução dos bichos", autor: "George Orwell", ano: 1945, lidos: false },
    // Adicione mais livros aqui
];

// 3. Verificação e Criação do Diretório "dados"
const pasta = "./dados";
if (!existsSync(pasta)) { // Verifica a existência do caminho
    mkdirSync(pasta); // Caso não exista ele cria uma pasta com o nome "data"
}

// 4. Salvando os dados convertidos na pasta em JSON
const caminho = `${pasta}/livros.json`;
writeFileSync(caminho, JSON.stringify(livros, null, 2));
console.log(`Dados salvos com sucesso! ✅`);

// 5. Lendo os dados de volta e convertendo em Objetos
const textolido = readFileSync(caminho, "utf-8"); 
const livrosRecuperados: Livro[] = JSON.parse(textolido);

// 6. Exibição Formatada do Conteúdo Recuperado
console.log(`\n === 📚Livros Recuperados 📚 ===`);
livrosRecuperados.forEach((livro, index) => {
    const status = livro.lidos ? "✅ Lido" : "❌ Não lido";
    console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} ${livro.ano} - ${status}`);
});