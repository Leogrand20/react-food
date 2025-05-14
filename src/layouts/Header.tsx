import { Link } from 'react-router'

export const Header = () => {
  return (
    <header className="header bg-warning">
      <div className="container">
        <nav className="navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to=".">
              <img
                src="/food-svgrepo-com.svg"
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              <span className="header__logo ms-2">
                Food
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
