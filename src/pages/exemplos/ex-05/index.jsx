import { useState } from 'react';
import Botao from './botao';
import styles from './index.module.css';

function Atividade03() {
  const [acaoSelecionada, setAcaoSelecionada] = useState("Nenhuma");

  return (
    <div className={styles.container}>
      <h1>Atividade 3</h1>
      <h2>Ação selecionada: {acaoSelecionada}</h2>

      <div className={styles.botoes}>
        <Botao texto="Cadastrar" tipo="cadastrar" aoClicar={() => setAcaoSelecionada("Cadastrar")} />
        <Botao texto="Editar" tipo="editar" aoClicar={() => setAcaoSelecionada("Editar")} />
        <Botao texto="Listar" tipo="listar" aoClicar={() => setAcaoSelecionada("Listar")} />
        <Botao texto="Excluir" tipo="excluir" aoClicar={() => setAcaoSelecionada("Excluir")} />
        <Botao texto="Cancelar" tipo="cancelar" aoClicar={() => setAcaoSelecionada("Cancelar")} />
      </div>
    </div>
  );
}

export default Atividade03;