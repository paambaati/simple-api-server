import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wiz Simple API Server</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wiz Simple API Server
        </h1>

        <p className={styles.description}>
          <ol>
            <li>
              <code className={styles.code}>GET /api/health</code>
            </li>
            <li>
              <code className={styles.code}>POST /api/login</code>
            </li>
          </ol>
        </p>

      </main>
    </div>
  )
}
