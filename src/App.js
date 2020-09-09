import React from "react";
import JSXDemo from "./components/JSXDemo";
import SetStateDemo from "./components/setstate/SetStateDemo";
import IfDemo from "./components/ifdemo/IfDemo";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'caizhegnjun'
        }
    }

    changeName = (data) => {
        this.setState({
            name: data
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <JSXDemo name={this.state.name} changeName={this.changeName}/>
                <SetStateDemo/>
                <IfDemo/>
            </div>
        )
    }
}

export default App
