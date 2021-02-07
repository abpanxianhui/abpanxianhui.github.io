import React, { Component } from "react";
import TopSwitch from "./component/TopSwitch";
import { listData, tabList } from "./utils";
import LeftSwitch from "./component/LeftSwitch";
import PageHeader from "./component/PageHeader";
import './App.css';

class App extends Component {
    state = {
        currentTabIndex: 0
    }

    renderItem = (item) => {
        return <LeftSwitch key={item.id} data={item} />
    }

    handleClicTab = (index) => {
        this.setState({ currentTabIndex: index })
    }

    render() {
        const { currentTabIndex } = this.state;

        return (
            <div className="page" >
                {/* 头部标题与tab */}
                <PageHeader data={tabList} currentTabIndex={currentTabIndex} onChange={this.handleClicTab} />
                {/* 上下切换 */}
                <div className="switch-box">
                    <TopSwitch style={{ width: '95vw', height: '86vh' }} itemPosition="2vh">
                        {
                            listData?.map((item) => {
                                return this.renderItem(item);
                            })
                        }
                    </TopSwitch>
                </div>

            </div>
        )
    }
}

export default App;
