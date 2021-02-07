import React, { memo } from "react";

const SwitchItem = (props) => {
    const { data, index } = props;

    return (
        <div
            style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}
            className="commodity_list_item"
            key={data.id}
        >
            <div className="commodity_list_img" >
                <img src={data.img} alt={data.comment} />
            </div>
            <div className="commodity_list_text">
                <div className="commodity_list_text_title">
                    <p>品牌</p><p>{data.brand}</p>
                </div>
                <div className="commodity_list_text_comment">
                    <p>
                        <img src={data.userImg} alt={data.comment} />
                    </p>
                    <p>{data.comment}</p>
                </div>
                <div className="commodity_list_text_pay">
                    <div className="commodity_list_text_pay_button">
                        ¥ {data.money} 了解它
                </div>
                </div>
            </div>
        </div>
    )
}

export default memo(SwitchItem);