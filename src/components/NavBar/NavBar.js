import CartWidget from "../CartWidget/CartWidget"
const NavBar = ()=> {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" >BeCOMPUTACION</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Teclados</a></li>
                            <li><a className="dropdown-item" >Monitores</a></li>
                            <li><a className="dropdown-item" >Auriculares</a></li>
                        </ul>
                    </li>
                </ul>
                    <div>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar