import React, { PureComponent, Children, cloneElement } from "react";
import Switch from "../Switch";
import "./index.css";

class TopSwitch extends PureComponent {
    state = {
        currentIndex: 0
    }

    handleChange = (currentIndex) => {
        this.setState({ currentIndex });
    }

    render() {
        const { children, itemPosition, style } = this.props;
        const { currentIndex } = this.state;

        return (
            <Switch className="switch-top" currentIndex={currentIndex} onChange={this.handleChange} style={style}>
                {Children.toArray(children).map((item, index) => {
                    if (currentIndex === index) {
                        // 当前展示块
                        return cloneElement(item, { className: (item.props.className || '') + ' switch-top-current-item' })
                    } else if (currentIndex + 1 === index) {
                        // 下展示块
                        const style = {
                            marginTop: itemPosition
                        }
                        return cloneElement(item, { className: (item.props.className || '') + ' switch-top-next-item', style })
                    } else if (currentIndex - 1 === index) {
                        // 上展示块
                        return cloneElement(item, { className: (item.props.className || '') + ' switch-top-pre-item' })
                    }
                    return null;
                })}
            </Switch>
        )
    }
}

export default TopSwitch;