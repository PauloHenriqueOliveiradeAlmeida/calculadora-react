import React, { useState } from "react";
import * as math from "mathjs";
function Calculadora() {
  const [valor, setValor] = useState("");
  let botoes = [];
  const valores = [
    9,
    8,
    7,
    "/",
    6,
    5,
    4,
    "X",
    3,
    2,
    1,
    "+",
    ",",
    0,
    "-",
    "=",
    "AC"
  ];

  for (let i in valores) {
    botoes.push(
      <button
        onClick={() => {
          seletor(valores[i]) ? setValor(valor + valores[i]) : setValor(valor);
        }}
        key={valores[i]}
      >
        {valores[i]}
      </button>
    );
  }

  function seletor(valorBotao) {
    if (typeof valorBotao === "string" && isNaN(valor.slice(-1))) {
      return false;
    } else {
      if (valorBotao === "=") {
        let soma;
        console.log(soma);
      }
      return true;
    }
  }
  return (
    <div>
      <h1>{valor}</h1>
      <div>{botoes}</div>
    </div>
  );
}

export default Calculadora;
