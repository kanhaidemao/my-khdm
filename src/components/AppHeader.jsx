import { navs } from '../data/portfolio'

export default function AppHeader() {
  return (
    <header>
      <div className="brand">DEV.FOLIO</div>
      <ul className="menu">
        {navs.map((n) => (
          <li key={n.href}>
            <a href={n.href} className="nav-link">
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
