import './HeaderPage.scss';
export const HeaderPage = () => {

    return (
        <div className="page-navigation">
            <h1>
                <span className="colorRedH1">Recipe</span>
                <span className="colorBlackH1">App</span>
            </h1>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <h6>Home</h6>
                    </li>
                    <li>
                        <h6>Vegetarianos</h6>
                    </li>
                    <li>
                        <h6>Platos Principales</h6>
                    </li>
                    <li>
                        <h6>Tortas</h6>
                    </li>
                    <li>
                        <h6>Comida rápida</h6>
                    </li>
                    <li>
                        <h6>Menú niños</h6>
                    </li>
                    <li>
                        <h6>Sopas</h6>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
