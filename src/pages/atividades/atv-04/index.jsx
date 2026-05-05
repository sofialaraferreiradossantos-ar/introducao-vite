import { useState } from "react";
import "./index.module.css";

function Atividade04() {
  const [qtd, setQtd] = useState("");
  const [produto, setProduto] = useState("");
  const [lista, setLista] = useState([
  
  ]);

  function adicionarItem() {
    if (!qtd || !produto) return;

    const novoItem = `${qtd}x ${produto}`;
    setLista([...lista, novoItem]);

    setQtd("");
    setProduto("");
  }

  return (
    <div className="container">
      <h2>Atividade 4 - Lista de compra</h2>

      <div className="form">
        <input
          className="input-qtd"
          type="number"
          placeholder="Qtd"
          value={qtd}
          onChange={(e) => setQtd(e.target.value)}
        />

        <input
          className="input-produto"
          type="text"
          placeholder="Produto..."
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />

        <button onClick={adicionarItem}>Adicionar</button>
      </div>

      <div className="lista">
        {lista.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Atividade04;

