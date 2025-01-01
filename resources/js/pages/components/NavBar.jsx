import React from "react";

export default function NavBar() {
    return (
            <nav className="navbar navbar-light bg-light position-sticky top-0" style={{zIndex:'999'}}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <h1>Title</h1>
                    </a>
                </div>
            </nav>
    );
}
