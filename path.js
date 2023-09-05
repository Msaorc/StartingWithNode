import { basename, dirname } from "path";

let nomeArquivo = basename('./teste.txt')
let fileName = basename('/teste/something')

let dir = dirname('/test/something')
let diretorio = dirname('/test/something/file.txt')

console.log('nome do arquivo -> ' + nomeArquivo)
console.log('filename -> ' + fileName)
console.log('dir -> ' + dir)
console.log('diretorio -> ' + diretorio)