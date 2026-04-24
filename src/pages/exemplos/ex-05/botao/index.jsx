import styles from './index.module.css';

function Botao({ texto, tipo, aoClicar }) {
    return (
        <button
            className={`${styles.botao} ${styles[tipo]}`}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;