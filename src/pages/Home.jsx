import styles from '../styles/home.module.css';

export default function Home() {
    return (
        <main className={styles.containerGeral}>
            <div className={styles.container}>
                <h1 className={styles.text}>BEM VINDO!</h1>
                <h1 className={styles.text}>VOCÊ É UM CARA DE SORTE EM, ESTE É O MELHOR PROGRAMA DO MUNDO MEU AMIGO</h1>
            </div>
        </main>
    );
}