import React from "react";

export default class JSXDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        setInterval(this.tick, 0)
    }

    tick = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {

        const element = (
            <div>
                <h1>Hello,Timer</h1>
                <h2>It is {this.state.time}</h2>
            </div>
        )

        return (
            <div>
                {element}
            </div>
        )
    }

}
