import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                My Blog Page
            </h1>
            <section className={styles.body}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus vitae nibh vel gravida. Sed et tempus eros.
                </p>
                <p>
                    Vestibulum a magna sed est aliquam sagittis. Nullam sapien justo, imperdiet quis imperdiet eget, vehicula a mauris. Vivamus posuere ornare dapibus. Maecenas porta dictum fermentum.
                </p>
                <p>Suspendisse ac tristique arcu. Cras pellentesque elit nec lacus convallis aliquam. Integer ante augue, scelerisque in tristique at, ornare sed ex.
                Suspendisse augue urna, sagittis et nisi ut, auctor fringilla sapien. Curabitur dapibus ligula lacus, vitae consequat justo euismod id.
                Maecenas quis egestas lectus, nec scelerisque mi. Nulla varius nibh libero, et lacinia risus aliquet vitae. Ut eget tincidunt augue.
                </p>
            </section>
            <div className={styles.link}>
                <Link href="/posts">
                    <a>
                        Visit our posts
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default Home;
