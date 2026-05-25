import logo from '@/assets/logo.svg'
import home from '@/assets/home.svg'
import favorites from '@/assets/favorites.svg'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
export const Header = () => {

    const location = useLocation()

    const navItems = [
        { path: '/home', label: 'Кинотеатр', icon: home },
        { path: '/favorites', label: 'Избранное', icon: favorites },
    ]

    return (
        <header>
            <div className="container">
                <div className="header__logo">
                    <div className="header__logo__icon">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <nav className="header__nav">
                    {navItems.map(({ path, label, icon }) => {
                        const isActive = location.pathname === path;
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`nav__item ${isActive ? 'active' : ''}`}
                            >
                                <button><img src={icon} alt="" />{label}</button>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}