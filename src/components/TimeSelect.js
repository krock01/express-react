/**
 * Created by krock on 1/11/17.
 */
import React from 'react';

import TimeDetail from './TimeDetail.js';

class TimeSelect extends React.Component {
    constructor(props){
        super(props);
        this.changeMinutes = this.changeMinutes.bind(this);
        this.changeHour = this.changeHour.bind(this);
        this.showHour = this.showHour.bind(this);
        this.showMinites = this.showMinites.bind(this);
    };
    changeMinutes(e){
        let numM = parseInt(this.props.time.minite);
        let numH = parseInt(this.props.time.hour);
        let time = {};
        if(Array.from(e.target.classList).indexOf('icon-jiantoushang') >= 0){
            if(numM!==59){
                numM = numM+1;
            }else{
                numM = 0;
                numH=numH===23?0:numH+1;
            }
        }else{
            if(numM!==0){
                numM=numM-1;

            }else{
                numM = 59;
                numH=numH===0?23:numH-1;
            }

        }
        time.hour = numH<10?'0'+numH:numH;
        time.minite = numM<10?'0'+numM:numM;

        this.props.userSelect(time);
    };
    changeHour(e){
        let numH = parseInt(this.props.time.hour);
        let time={
            minite:this.props.time.minite
        };
        if(Array.from(e.target.classList).indexOf('icon-jiantoushang') >= 0){
            numH = numH===23?numH=0:numH+1;
        }else{
            numH = numH===0?numH=23:numH-1;
        }
        time.hour = numH<10?'0'+numH:numH;
        this.props.userSelect(time);
    };
    showHour(){
        this.props.userSubMode('Hour');
    };
    showMinites(){
        this.props.userSubMode('Minites');
    };
    renderHour(){
        if(this.props.showSub !=='Hour') return null;
        return <TimeDetail timeType='hour' time={this.props.time} userSubMode={this.props.userSubMode} userSelect={this.props.userSelect}/>
    };
    renderMinites(){
        if(this.props.showSub !=='Minites') return null;
        return <TimeDetail timeType='minite' time={this.props.time} userSubMode={this.props.userSubMode} userSelect={this.props.userSelect}/>
    };
    renderTime(){
        if(this.props.showSub !== 'Time') return null;
        return <div ><table className="time" >
                <tbody>
                <tr>
                    <td onClick={this.changeHour}><strong className="iconfont icon-jiantoushang"></strong></td>
                    <td> </td>
                    <td onClick={this.changeMinutes}><strong className="iconfont icon-jiantoushang"></strong></td>
                </tr>
                <tr>
                    <td onClick={this.showHour}><strong> {this.props.time.hour} </strong></td>
                    <td> : </td>
                    <td onClick={this.showMinites}><strong> {this.props.time.minite} </strong></td>
                </tr>
                <tr>
                    <td onClick={this.changeHour}><strong className="iconfont icon-jiantouxia"></strong></td>
                    <td></td>
                    <td onClick={this.changeMinutes}><strong className="iconfont icon-jiantouxia"></strong></td>
                </tr>
            </tbody>
            </table></div>;
    };
    render(){
        return (
            <div className='pop '>
                {this.renderTime()}
                {this.renderHour()}
                {this.renderMinites()}
            </div>
        );
    }
}
module.exports = TimeSelect;