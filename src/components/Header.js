import React from "react";

function Header({LogOutFunction, isLoggedIn}){
    return(
        <header className="Header">
            <nav className="header__nav">
                {isLoggedIn && <a href="/userprofile">Home</a>}
                {!isLoggedIn && <a href="/create-account">Create Account</a>}
                {!isLoggedIn &&<a href="/login">Login</a>}
                {isLoggedIn && <button onClick={() => LogOutFunction()}>Logout</button>}
            </nav>
        </header>
    );
}

export default Header;
