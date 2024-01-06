const nomes = ['JS','php','Java','Elixir','Go','Python'];
const precos = [25, 15,30,50,45,20];

let stringToObj=["["];
nomes.map(function(nome, i) {
    stringToObj += "{"
    stringToObj += '"nome": "' + nome+'",';
    stringToObj += '"preco": ' + precos[i];
    stringToObj += "}"
    i<nomes.length-1 ? stringToObj += ","  :"" 
});
stringToObj += "]"
const Objeto = JSON.parse(stringToObj);
console.log(Objeto);