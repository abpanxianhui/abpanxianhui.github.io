import React, { memo, useRef, Children, cloneElement, useEffect, useState } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import "./index.css";
smoothscroll.polyfill();

const ScrollView = (props) => {
    const { children, className, onChange, currentIndex } = props;
    const [prevIndex, setPrevIndex] = useState(currentIndex);
    const containerEl = useRef(null);

    useEffect(() => {
        if (prevIndex === props.currentIndex) return;
        handleScrollLeft(props.currentIndex);
        setPrevIndex(props.currentIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentIndex])

    const handleScrollLeft = (index) => {
        if (!containerEl.current) return;
        const child = containerEl.current.children[index];
        const left = child.offsetLeft;
        const scrollWidth = containerEl.current.scrollWidth;
        const containerWidth = containerEl.current.offsetWidth
        const containerWidth2 = containerWidth / 2;

        let scrollLeft = 0;
        if (left < containerWidth2) {
            scrollLeft = 0;
        } else if (scrollWidth - left < containerWidth2) {
            scrollLeft = scrollWidth - containerWidth;
        } else {
            scrollLeft = left - containerWidth2 + (child.offsetWidth / 2);
        }

        containerEl.current.scroll({
            left: scrollLeft,
            behavior: "smooth"
        });
    }

    return (
        <div ref={containerEl} className={`scroll_view_x ${className}`}>
            {Children.map(children, (element, index) => {
                if (!element) return element;
                return cloneElement(element, {
                    onClick: () => {
                        onChange(index)
                    }
                })
            })}
        </div>

    )
}

export default memo(ScrollView);