import { NavLink } from "react-router-dom";

const CategoriesNav = ({ setIsHovering }) => {
    return (
        <nav className="nav" onMouseEnter={() => setIsHovering(false)}>
            <div className="nav-bar-categories-border" />
            <div className="nav-bar-categories">
                <NavLink to="/category/gear">GEAR</NavLink>
                <NavLink to="/category/style">STYLE</NavLink>
                <NavLink to="/category/cars">CARS</NavLink>
                <NavLink to="/category/tech">TECH</NavLink>
                <NavLink to="/category/shelter">SHELTER</NavLink>
                <NavLink to="/category/vices">VICES</NavLink>
                <NavLink to="/category/body">BODY</NavLink>
                <NavLink to="/category/etc">ETC</NavLink>
                <NavLink to="/my-stash" id='my-stash-link'>MY STASH</NavLink>
            </div>
            <div className="nav-bar-categories-border" />
            {/* <div className="nav-bar-subcategories-border" />
                <div className="nav-bar-subcategories">
                    <a href="#hi">SHOP</a>
                    <a href="#hi">MAGAZINE</a>
                    <a href="#hi">IPHONE APP</a>
                    <a href="#hi">ANDROID APP</a>
                    <a href="#hi">MOST WANTED</a>
                    <a href="#hi">BLACK LIST</a>
                    <NavLink to="/my-stash">STASH</NavLink>
                </div>
                <div className="nav-bar-subcategories-border" /> */}
        </nav>
    )
}

export default CategoriesNav;
