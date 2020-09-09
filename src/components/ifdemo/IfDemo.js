import React from "react";

class IfDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    logoutHandle = () => {
        this.setState({
            isLogin: false
        })
    };

    loginHandle = () => {
        this.setState({
            isLogin: true
        })
    }


    render() {
        const showView = this.state.isLogin ?
            <div>
                <p>欢迎 蔡正峻</p>
                <button onClick={this.logoutHandle}>注销</button>
            </div> :
            <div>
                <p>亲，请登录！</p>
                <button onClick={this.loginHandle}>登录
                </button>
            </div>
        return (
            <div>
                条件渲染
                {showView}
            </div>
        )
    }
}

export default IfDemo
