import React, { memo } from "react";
import ScrollView from "../ScrollView";
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const Abbreviation = (props) => {
    const { data, position, onChange, currentIndex } = props;

    return (
        <div className="commodity_list_abbreviation">
            <div className="commodity_list_abbreviation_count">
                <p>{data?.commodityList?.length || 0}<br />款商品</p>
            </div>

            <ScrollView
                currentIndex={currentIndex}
                onChange={onChange}
                className="commodity_list_abbreviation_list"
            >
                {data?.commodityList?.map((item, index) => {
                    return (
                        <div
                            className="commodity_list_abbreviation_list_item"
                            key={item.id}
                        >
                            <img src={item.img} alt={item.comment} />
                        </div>
                    )
                })}
                <p
                    style={{ transform: `translate3d(${position}vw, 0, 0)` }}
                    className="current_commodity">
                    <i />
                </p>
            </ScrollView>
        </div>
    )
}

export default memo(Abbreviation);