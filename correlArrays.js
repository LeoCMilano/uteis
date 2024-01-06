const nomes = ['JS','php','Java','Elixir','Go','Python'];
const precos = [25, 15,30,50,45,20];

const nomesEPrecos= [];

nomes.map(function(nome, i) {
    nomesEPrecos.push ([nome, precos[i]]);
});

const precosOrdenados = nomesEPrecos.sort((a,b)=>a[1]-b[1]);

console.log(`O livro mais barato é o ${precosOrdenados[0][0]} e custa R$${precosOrdenados[0][1]},00.`);


// const precosOrdenados = precos.sort((a,b)=> {
//     if (a>b) return 1;
//     if (b>a) return -1;
//     if (a==b) return 0;
// });

// const precosOrdenados = precos.sort((a,b)=>a-b);
// const menorValor =precosOrdenados;
// console.log(`O menor valor é ${menorValor}`)