import React, { useState } from "react";
import * as math from "mathjs";
import "./styles/calculadora.css";
function Calculadora() {
  const [valor, setValor] = useState("");
  let botoes = [];
  const valores = [
    "AC",
    9,
    8,
    7,
    "/",
    6,
    5,
    4,
    "*",
    3,
    2,
    1,
    "+",
    ",",
    0,
    "-",
    "="
  ];

  for (let i in valores) {
    botoes.push(
      <button
        className={
          valores[i] === "AC" ? "AC" : valores[i] === "=" ? "equal" : "number"
        }
        onClick={() => {
          seletor(valores[i]);
        }}
        key={valores[i]}
      >
        {valores[i]}
      </button>
    );
  }

  function seletor(valorBotao) {
    if (valorBotao === "AC") {
      setValor("");
    } else if (
      typeof valorBotao === "string" &&
      (valor.substr(valor.length - 1, valor.length) === "/" ||
        valor.substr(valor.length - 1, valor.length) === "*" ||
        valor.substr(valor.length - 1, valor.length) === "+" ||
        valor.substr(valor.length - 1, valor.length) === "-" ||
        valor.substr(valor.length - 1, valor.length) === "=")
    ) {
      setValor(valor);
    } else {
      setValor(valor + valorBotao);
      if (valorBotao === "=") {
        let valorFinal = math.evaluate(valor);
        setValor(valorFinal);
      }
    }
  }
  return (
    <div>
      <textarea className="screen" defaultValue={valor}></textarea>
      <div className="btns">{botoes}</div>
    </div>
  );
}

export default Calculadora;
