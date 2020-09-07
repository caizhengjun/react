import React from "react";
import JSXDemo from "./components/JSXDemo";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'caizhegnjun'
        }
    }

    render() {
        return (
            <div>
                <JSXDemo/>
            </div>
        )
    }
}
