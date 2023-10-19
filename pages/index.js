import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kommodo lending</title>
        <link rel="icon" href="/kommodo.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
          <a href="https://github.com/KommodoLabs/Kommodo-whitepaper/blob/main/Kommodo.pdf">Kommodo</a>, a novel lending protocol<br/>
          <Typewriter
            options={{
              strings: ['no liquidations', 'no oracles', 'minimal complexity'],
              autoStart: true,
              loop: true,
            }}
          />
          <br/>
          <a href="https://twitter.com/KommodoLabs" >
            Updates &rarr;
          </a>
        </h1>
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          textAlign: left;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
