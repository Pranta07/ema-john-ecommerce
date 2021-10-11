import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../hooks/useFirebase";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {user.displayName && (
                    <span className="text-white">{user.displayName}</span>
                )}
                {user.email ? (
                    <button onClick={handleSignOut} className="btn btn-dark">
                        Logout
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </div>
    );
};

export default Header;
