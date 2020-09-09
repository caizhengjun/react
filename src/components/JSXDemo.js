import React from "react";
import NavBar from "./tabbar/NavBar";

class JSXDemo extends React.Component {

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
    };

    changeName = () => {
        this.props.changeName("我是儿子的数据！");
    };

    render() {
        const nav1 = ["首页", "搜索", "购物车"];
        const nav2 = ["Java", "Hadoop", "Spark"];
        const element = (
            <div>
                <button onClick={this.changeName}>修改</button>
                <h2>北京时间 {this.state.time}</h2>
                <NavBar nav={nav1} title={"路径导航"}/>
                <NavBar nav={nav2} title={"学习导航"}/>
            </div>
        );
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default JSXDemo
