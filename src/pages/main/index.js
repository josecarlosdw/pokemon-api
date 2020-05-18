import React, { Component } from "react";
import api from "../../services/api";
import {Link} from 'react-router-dom';

import './styles.css'; 

export default class Main extends Component {
    state = {
        cards: [],
        productInfo: {},
        page: 1,
    };

    componentDidMount(){
        this.loadProducts();
    }
    
    loadProducts = async (page = 1) => {
        const response = await api.get(`/cards?page=${page}`);

        const { cards, ...productInfo } = response.data;
        this.setState({ cards: cards, productInfo, page });

        //console.log(response.data.cards)        
    };

    prevPage = () => {
        const {page, productInfo} = this.state;
        if(page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const {page,productInfo} = this.state;
        if(page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);  
    }

    render() {
        const { cards, page, productInfo } = this.state;
        return (
            <div className="card-list">
                {cards.map(card => (                    
                    <article key={card.id}>
                        <img src={card.imageUrl} />
                        <p><strong>Nome: {card.name}</strong></p>
                        <Link to={`/cards/${card.id}`}>Detalhes</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
            );
    }    
}