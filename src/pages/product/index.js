import React, { Component } from "react";
import "./styles.css";

export default class FetchCards extends Component {
  state = {    
    card: {}
  };

  async componentDidMount() {
    const url = "https://api.pokemontcg.io/v1/cards";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ card: data.cards[0] });
  }

  render() {
    
    return (
      <div  className="card-list-details">
        <img src={this.state.card.imageUrlHiRes} />
        <h2>
        <p><i>Nome:</i> {this.state.card.name}</p>
        <p><i>Id:</i> {this.state.card.id}</p> 
        <p><i>Tipo:</i> {this.state.card.types}</p>
        <p><i>Supertipo:</i> {this.state.card.supertype}</p>
        <p><i>Raridade:</i> {this.state.card.rarity}</p>
        </h2>  
       
      </div>
    );
  }
}