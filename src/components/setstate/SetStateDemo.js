import React from "react";

class SetStateDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    //同步写法
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count);
    };

    //异步写法
    async incrementAsync() {
        await this.setStateAsync({
            count: this.state.count + 1
        });
        console.log(this.state.count);
    };

    setStateAsync = (state) => {
        return new Promise((resolve => {
            this.setState(state, resolve)
        }))
    };

    render() {
        return (
            <div>
                setState 是同步还是异步？
                <p>{this.state.count}</p>
                <button onClick={this.incrementAsync.bind(this)}>修改</button>
            </div>
        )
    }
}

export default SetStateDemo
