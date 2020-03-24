  
import React from 'react'

export default function Home() {

//FOR---------------------------------------------------------------------------------------------------------------------------------------------------------

      const numeros = [2, 3, 6, 5, 10];

      let novoArrayNumeros = []

      /* Puxando para o meu novoArray novos valores manipulados para cada valor no antigo*/
      for (let i = 0; i < numeros.length; i++) {
          novoArrayNumeros.push(numeros[i] * 2)
        }

//MAP---------------------------------------------------------------------------------------------------------------------------------------------------------


      /* Com o map, uma função de callback manipula cada valor desse array, então ele vai iterar 1 a 1 cada valor do array, e aplicar para cada valor, uma função */ 
      
      const novoArrayMap = numeros.map(function(numero) {
        return numero * 2;
      }); 
      
      const novoArrayMapArrow = numeros.map(numero => numero * 2);

//FILTER---------------------------------------------------------------------------------------------------------------------------------------------------------

      /* A diferença do filter, é que ele retorna um valor boolean (os que forem true vão ser adicionados ao array) */

      
      const numerosFiltrados = numeros.filter(function(numero){
        if(numero % 2 === 0){
          return true;
        }else{
          return false;
        }
      });
       

      const arrayMapFilter = numeros
      .filter(numero => numero % 2 === 0)
      .map(numero => numero * 2);


//REDUCE---------------------------------------------------------------------------------------------------------------------------------------------------------

      let soma = 0;

      for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
      }

      /* O reduce recebe 2 parâmetros: uma function(q recebe o valor atual "0" e os do array) e um valor inicial */
      numeros.reduce(function(valorAcumulador, valorArray) {
        return valorAcumulador + valorArray;
      }, 0)


      /* Utilizando Reduce com Array de Objetos */
      const pessoas = [
        {
          nome: 'Ayrton',
          idade: 27
        },
        {
          nome: 'João',
          idade: 14
        },
        {
          nome: 'Maria',
          idade: 23
        },
        {
          nome: 'Joana',
          idade: 21
        },
        {
          nome: 'Lucas',
          idade: 32
        },
        {
          nome: 'Mateus',
          idade: 15
        },
        {
          nome: 'Isa',
          idade: 23
        },
        {
          nome: 'Luiza',
          idade: 17
        }
      ];

      const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {

        const MaiorMenorIdade = valorAcumulador.idade >= 18 ? 'maiores' : 'menores';

        valorAcumulador[MaiorMenorIdade].push(valorArray)

        return valorAcumulador;

      }, {maiores: [], menores:[]});

      console.log(pessoasAgrupadas);
  


//---------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <h1>Hello</h1>


      
    </div>
  )




}