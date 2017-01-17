/**
 * Created by krock on 1/13/17.
 */
import React from 'react';
import {HOUR,MINITE} from './constants.js';

class TimeDetail extends React.Component{
    constructor(props){
        super(props);
        this.time = props.time;
        this.select = this.select.bind(this);
    }

    select(e){
        this.time[this.props.timeType]=e.target.textContent.trim();
        this.props.userSelect(this.time);
        this.props.userSubMode('Time');
    }
    render(){

        let times = this.props.timeType==='hour'?HOUR:MINITE;
        let rows=[];
        for(let i=0;i<times.length;i++){
            let tds=[];
            for(let k=0;k<times[i].length;k++){
                tds.push(<td key={'td'+k} onClick={this.select}>{times[i][k]}</td>);
            }
            rows.push(<tr key={'tr'+i}>{tds}</tr>);
        }
        return (
                <table  className="detail">
                    <tbody>
                    {rows}
                    </tbody>
                </table>
        );
    }
};
module.exports = TimeDetail;