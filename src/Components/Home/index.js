import React from 'react';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                渣渣辉<br/>
                <span>开具一条狗，装备看到爆</span>
                {this.props.children}
            </div>
        )
    }
}