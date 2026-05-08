/**
 * @file   src/pages/exemplos/ex-04/index.jsx
 */

import { useState } from 'react';
import styles from './index.module.css';

export default function Exemplo04() {
    const [qtd, setQtd] = useState('');
    const [produto, setProduto] = useState('');
    const [lista, setLista] = useState([
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!qtd || !produto) return;

        const novoItem = `${qtd}x ${produto}`;

        setLista([...lista, novoItem]);
        setQtd('');
        setProduto('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Atividade 4 - Lista de compra</h1>

                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <input
                        type="number"
                        placeholder="Qtd"
                        value={qtd}
                        onChange={(e) => setQtd(e.target.value)}
                        className={styles.inputQtd}
                    />

                    <input
                        type="text"
                        placeholder="Produto..."
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                        className={styles.inputProduto}
                    />

                    <button type="submit">Adicionar</button>
                </form>

                <div className={styles.lista}>
                    {lista.map((item, index) => (
                        <div key={index} className={styles.item}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}