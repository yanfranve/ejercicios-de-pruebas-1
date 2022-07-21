import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Resumen = () => {
  const [Valor, setValor] = useState(" ");
  const [Data, setData] = useState({});
  const [credit, setCredit] = useState([]);
  const [error, setError] = useState("inicio");

  const tdc = () => {
    let credit = [];
    for (const key in Data.comprasPorTDC) {
      credit.push(key);
    }
    setCredit(credit);
  };

  useEffect(() => {
    tdc();
  }, [Data]);

  return (
    <>
      <div>Resumen</div>
      <h3>introdusca el dia a consultar</h3>
      <input
        type="number"
        onChange={(e) => {
          setValor(e.target.value);
          setError("inicio");
        }}></input>
      <button
        onClick={async () => {
          if (Valor <= 0 || Valor > 31) {
            setError("yes");
            return;
          }
          const resu = await axios.get(
            `http://localhost:3001/resumen/2019-12-01?dias=${
              Valor < 10 ? `0${Valor}` : Valor
            }`
          );
          setData(resu.data);
          setError("not");
        }}>
        consultar
      </button>
      {error === "yes" ? (
        <div>
          <h4>
            No se encontraron resultados, por favor introduce un valor entre 1 y
            30
          </h4>
        </div>
      ) : error === "not" ? (
        <div>
          <p>total: {Data.total}</p>
          <p>no compraron: {Data.nocompraron}</p>
          <p>compraMasAlta: {Data.compraMasAlta}</p>
          <ol>
            <p>comprasPorTDC:</p>
          </ol>
          {credit.map((i) => (
            <>
              <li>
                {i}: {Data.comprasPorTDC[i]}
              </li>
            </>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Resumen;
