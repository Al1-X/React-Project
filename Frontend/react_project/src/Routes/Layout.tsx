import { Outlet, Link } from "react-router-dom";

const divStyle = {
    display: "flex",
    alignItems: "center",
    position: "fixed" as "fixed",
    top: "90%",
    gap: "10px",
    left: "50%",
    transform: "translate(-50%, 0)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    fontSize: "30px"
}

const Layout: React.FC = () => {
    return (
        <>
            <div style={divStyle}>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
                <Link to={'/'}>Home</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;