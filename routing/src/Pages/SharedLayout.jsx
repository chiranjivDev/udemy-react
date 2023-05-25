import { NavLink, Outlet } from "react-router-dom";
const SharedLayout = () => {
    return (
        <>
            <nav className="navbar">
                <NavLink to='/' className="nav-link">Home</NavLink>
                <NavLink to='/products' className="nav-link">Products</NavLink>
                <NavLink to='/about' className="nav-link">About</NavLink>
                <NavLink to='/login' className='nav-link login'>Login</NavLink>
            </nav>
            <Outlet/>
        </>
    )
};

export default SharedLayout;