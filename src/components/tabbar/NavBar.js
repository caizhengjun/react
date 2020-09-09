import React from "react";

class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const {nav, title} = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <ul>
                    {
                        nav.map((element, index) => {
                            return (
                                <li key={index}>{element}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default NavBar
