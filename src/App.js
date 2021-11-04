
import React, { Component } from 'react';
import './App.css';
import api from './api';
import Headers from './Headers';


class App extends Component{

    state= {
        personagens: [],
    }

    async componentDidMount(){

        const response = await api.get('');

        this.setState({personagens: response.data.results});

    }

    clickbuttom(name){
        console.log('Botao ');

    }

    render(){
         const {personagens} = this.state;

         return(
             <div>
                 <Headers/>
                 {personagens.map((personagem) => (
                     <li key={personagem.index}>
                         {console.log(personagem)}
                         <p>{personagem.name}</p>
                         <button onClick={() => this.clickbuttom(personagem.name)}>Filmes do personagem</button>
                     </li>
                 ))}

             </div>
         );

    };
};

export default App;
