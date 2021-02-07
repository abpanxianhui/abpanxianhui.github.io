import React, { PureComponent } from "react";
import Abbreviation from "./Abbreviation";
import Switch from "../Switch";
import "./index.css";

const defaultCurrenTransition = 0.3;

class LeftSwitch extends PureComponent {
    state = {
        currentAbbreviationPosition: 0,
        currentPosition: 0,
        currenTransition: defaultCurrenTransition,
        slidingDistance: 0,
        currentIndex: 0,
    }

    currentIndex = 0;
    currentPosition = 0;
    switchElementWidth = 0;

    handleChange = (index) => {
        this.currentIndex = index;
        this.currentPosition = this.currentIndex * -this.switchElementWidth;
        this.setState({
            currenTransition: defaultCurrenTransition,
            currentPosition: this.currentPosition,
            currentAbbreviationPosition: this.currentIndex ? this.currentIndex * 18.1333 : 0,
            currentIndex: index,
        })
    }

    handleTouchMove = (position) => {
        this.setState({
            currenTransition: 0,
            currentPosition: this.currentIndex * -this.switchElementWidth - position
        })
    }

    getSwitchElement = (e) => {
        if (e) this.switchElementWidth = e.offsetWidth;
    }

    render() {
        const { currentPosition, currenTransition, slidingDistance, currentAbbreviationPosition, currentIndex } = this.state;
        const { className, style, data } = this.props;

        return (
            <div className={`left-switch ${className}`} style={style}>
                <div className="switch-lett-item-title">
                    {data?.title?.map((item, index) => {
                        return <span className={item.type ? 'active_title' : ''} key={index}>{item.value}</span>
                    })}
                </div>
                <div ref={this.getSwitchElement} className="commodity_box">
                    <Switch
                        style={{ transform: `translate3d(${currentPosition}px, 0, 0)`, transition: `${currenTransition}s` }}
                        className="commodity_list"
                        type="left"
                        slidingDistance={slidingDistance}
                        currentIndex={currentIndex}
                        onTouchMove={this.handleTouchMove}
                        onChange={this.handleChange}
                    >
                        {data?.commodityList?.map((item, index) => {
                            return (
                                <div
                                    style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}
                                    className="commodity_list_item"
                                    key={item.id}
                                >
                                    <div className="commodity_list_img" >
                                        <img src={item.img} alt={item.comment} />
                                    </div>
                                    <div className="commodity_list_text">
                                        <div className="commodity_list_text_title">
                                            <p>品牌</p><p>{item.brand}</p>
                                        </div>
                                        <div className="commodity_list_text_comment">
                                            <p>
                                                <img src={item.userImg} alt={item.comment} />
                                            </p>
                                            <p>{item.comment}</p>
                                        </div>
                                        <div className="commodity_list_text_pay">
                                            <div className="commodity_list_text_pay_button">
                                                ¥ {item.money} 了解它
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Switch>
                </div>

                <Abbreviation
                    data={data}
                    currentIndex={currentIndex}
                    position={currentAbbreviationPosition}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default LeftSwitch;