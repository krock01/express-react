/**
 * Created by krock on 1/13/17.
 */

import React from 'react';
import TimeSelect from './TimeSelect.js'

class TimeInput extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            showSub:'Time',
            time:this.nowTime()
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.userSubMode = this.userSubMode.bind(this);
        this.userSelect = this.userSelect.bind(this);
    };
    handleClick(){
        this.setState({isOpen:true});
    };
    handleCancel(){
        this.setState({isOpen:false});
    }
    showPop(){
        if(!this.state.isOpen) return null;
        return <TimeSelect
                showSub = {this.state.showSub}
                time={this.state.time}
                userSubMode={this.userSubMode}
                userSelect={this.userSelect}
            />
    };
    renderBlock() {
        if (!this.state.isOpen) return null;
        return <div className='blockout' onClick={this.handleCancel}></div>
    }
    nowTime(){
        let time = new Date();
        let minite = time.getMinutes();
        minite = minite<10?'0'+minite:minite;
        return {
            hour:time.getHours(),
            minite:minite
        };
    };
    userSubMode(showSub){
        this.setState({
            showSub:showSub
        });
    };
    userSelect(time){
        this.setState({
            time:time
        });
    };
    render(){
        return (
            <div className="timeInput">
                <input type="text" value={this.state.time.hour+':'+this.state.time.minite} ref="timeInput" readOnly className="input-middle"/>
                <span className="iconfont icon-shijian" onClick={this.handleClick} ></span>
                {this.showPop()}
                {this.renderBlock()}
            </div>
        );
    }
}
module.exports = TimeInput;