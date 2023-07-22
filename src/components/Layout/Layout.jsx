import React from "react";
import Nav from "../Nav/Nav";

export default function Layout({ children }) {
    return (<div>
        <div className="container">
            <Nav />
            {children}
        </div>
    </div>)
}