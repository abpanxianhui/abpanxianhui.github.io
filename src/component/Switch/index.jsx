import React, { PureComponent, Children } from "react";
import './index.css';

class Switch extends PureComponent {
    static defaultProps = {
        type: 'top',
        slidingDistance: 0,
        currentIndex: 0
    }

    starPosition = null;
    endPosition = null;
    direction = null;
    position = 0;

    handleTouchStart = (e) => {
        this.starPosition = {
            left: e.touches[0].clientX,
            top: e.touches[0].clientY
        }
    }

    handleTouchMove = (e) => {
        const { currentIndex } = this.props;

        this.endPosition = {
            left: e.touches[0].clientX,
            top: e.touches[0].clientY
        }

        const leftPosition = this.starPosition.left - this.endPosition.left;
        const topPosition = this.starPosition.top - this.endPosition.top;

        if (!this.direction) {
            if (Math.abs(leftPosition) < Math.abs(topPosition)) {
                // 上下滑动
                this.direction = 'top';
            } else {
                // 左右滑动
                this.direction = 'left';
            }
        }

        if (this.direction !== this.props.type) return;

        const position = this.props.type === 'top' ? topPosition : leftPosition;
        this.position = position;

        const lenght = Children.count(this.props.children);

        if ((position < 0 && currentIndex > 0) || (position > 0 && currentIndex < lenght - 1)) {
            this.props.onTouchMove?.(position);
        }
    }

    // 监听用户手势结束
    handleTouchEnd = () => {
        if (this.direction !== this.props.type) {
            this.direction = null;
            return;
        };

        this.positionTop(this.position);
        this.position = 0;
        this.starPosition = null;
        this.endPosition = null;
        this.direction = null;
    }

    positionTop = (position) => {
        let { currentIndex } = this.props;

        if (this.props.slidingDistance > Math.abs(position)) {
            this.props.onChange?.(currentIndex);
            return
        }

        if (position < 0) {
            currentIndex > 0 && currentIndex--;
        } else {
            const lenght = Children.count(this.props.children);
            currentIndex < lenght - 1 && currentIndex++;
        }

        this.props.onChange?.(currentIndex);
    }

    render() {
        const { children, style, className } = this.props;

        return (
            <div
                onTouchMove={this.handleTouchMove}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
                className={`switch ${className || ''}`}
                style={style}
            >
                {children}
            </div>
        );
    }

}

export default Switch;
