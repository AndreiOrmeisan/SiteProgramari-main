import React, { Component } from "react";
import Card from '../../components/Card';
import './dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://trackout.herokuapp.com/api/business/snippets/get?query&page=0&pageSize=5")
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
    return (
      <div className = 'card'>
          {this.state.data.map(el => (
            <Card name = {el.businessName} img = {el.businessImgUrl} rating = {el.rating} id = {el.businessId} setInfo = {this.props.setInfo}></Card>
          ))}
      </div>
    );
  }
}

export default Dashboard;

