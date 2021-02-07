import React, { memo } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import classnames from "classnames";
import ScrollView from "../ScrollView";
import "./index.css";
smoothscroll.polyfill();

const PageHeader = (props) => {
    const { data, currentTabIndex, onChange } = props;

    return (
        <header className="page-header">
            <div className="page-header-tab">

                <ScrollView
                    className="page-header-tab-list"
                    onChange={onChange}
                    currentIndex={currentTabIndex}
                >
                    {
                        data?.map((item, index) => (
                            <div
                                onClick={() => { onChange(index) }}
                                className={
                                    classnames(
                                        'page-header-tab-list-item',
                                        { 'page-header-tab-current-item': currentTabIndex === index }
                                    )}
                                key={item.id}>
                                {item.title}
                            </div>
                        ))
                    }
                </ScrollView>
            </div>
        </header>
    )
}

export default memo(PageHeader);