import React,{ Component } from "react";
import { browserHistory } from 'react-router'
import { Menu, Button } from 'element-react';

export default class App extends Component{
	render(){
		let childs = React.Children.toArray(this.props.children);
    
		return(
			<div>
        <Menu mode="horizontal" onSelect={this.onSelect.bind(this)} >
          <Menu.Item index="/ucc" >ucc</Menu.Item>
          <Menu.Item index="/openfire" >openfire</Menu.Item>
          <Menu.Item index="/img" >img</Menu.Item>
          <Menu.Item index="/redis" >redis</Menu.Item>
          <Menu.Item index="/cassandra" >cassandra</Menu.Item>
          <Menu.Item index="/app" >app</Menu.Item>
          <Menu.Item index="/mongo" >mongo</Menu.Item>
          <Menu.Item index="/qa" >qa</Menu.Item>
          <Menu.Item index="/other" >other</Menu.Item>
          <Menu.Item index="/unused" >unused</Menu.Item>
          <Menu.Item index="/export" >导出</Menu.Item>
        </Menu>
				{ childs }
        
			</div>
		)
	}
  
  onSelect(index) {
    console.log(index)
    browserHistory.push({pathname: index})
  }
}

