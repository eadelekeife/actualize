import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

interface LayoutInterface {
    children: React.ReactElement
}

const DisplayLayout = (props: LayoutInterface) => {
    return (
        <div>
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}

export default DisplayLayout;