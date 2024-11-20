import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app/globals.css';

export const Menu: React.FC = () => { 
    return(
        <nav className="navbar navbar-expand-lg bg-lightgreen-custom menu-custom">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <span className="nav-link">Home</span >
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroLista">
              <span  className="nav-link">Catálogo</span >
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroDados">
              <span  className="nav-link">Novo</span >
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}