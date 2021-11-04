
import React, { Component, useState, useEffect } from 'react';
import './App.css';
import api from './api';
import Headers from './Headers';
import axios from 'axios';



class App extends Component{

    state= {
        personagens: [],
    }


    async componentDidMount(){

        const response = await api.get('');

        this.setState({personagens: response.data.results});

    }

    clickbuttom(index, person){

        console.log('Botao do personagem ' + person.films);

        const films = person.films;
        let resp = '';

        {films.map((film, i) => (
            <li key={i}>
                {console.log(film)}
                {resp = axios.get(film)}
                {console.log(resp)}
                {/*{console.log(resp.title)}*/}

            </li>
        ))}

    }

    render(){
         const {personagens} = this.state;

         return(
             <div>
                 <Headers/>
                 {personagens.map((personagem, index) => (
                     <li key={index}>
                         {console.log(personagem)}
                         <button onClick={() => this.clickbuttom(index, personagem)}>{personagem.name}</button>
                     </li>
                 ))}

             </div>
         );

    };
};

export default App;
