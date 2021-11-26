import React, { Component } from "react";
import Card from './Card';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    console.log(this.props)
    fetch("https://trackout.herokuapp.com/api/business/get?businessId="+this.props.info)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result
          });
        }
      )
  }
  
  render() {
    console.log('aici',this.state.data)
    return (
      <div className = 'card'>
          <Card name = {this.state.data.businessName} img = {this.state.data.businessImgUrl} rating = {this.state.data.rating} id = {this.state.data.businessId} setInfo = {this.props.setInfo}></Card>
      </div>
    );
  }
}

export default Dashboard;
