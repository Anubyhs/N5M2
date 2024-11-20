import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }:AppProps ){
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps}/>
        <footer className="footer navbar navbar-expand navbar-light bg-lightgreen">
      <ul className="navbar-nav">
        <li className="nav-item">
          <p className="nav-link" style={{ color: 'blue', fontWeight: 'bold' }}>
            &copy; Francinaldo Sebo Cultural 2024 - Todos os direitos reservados
          </p>
        </li>
      </ul>
    </footer>
        </>
    )
}

export default MyApp;