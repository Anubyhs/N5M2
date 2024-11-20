import Head from 'next/head';
import 'app/globals.css';
import { Menu } from '@/componentes/Menu';
import style from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
  <div >
    <Head>
      <title>Loja Next</title>
    </Head>
    <Menu />
    <div className="container">
    <main className={style.main}>
      <h1 className="title">Francinaldo Sebo Cultural</h1>
      <img src="/logo.png" alt="Logo" className="logo" />
      <h1 className="title">Cultura Brasileira!</h1> 
    </main>
    <footer className="footer navbar navbar-expand navbar-light bg-lightgreen">
      <ul className="navbar-nav">
        <li className="nav-item">
          <p className="nav-link" style={{ color: 'blue', fontWeight: 'bold' }}>
            &copy; Francinaldo Sebo Cultural 2024 - Todos os direitos reservados
          </p>
        </li>
      </ul>
    </footer>
    </div>
  </div>
  )
}

