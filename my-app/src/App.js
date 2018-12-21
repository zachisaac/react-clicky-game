
import React, { Component } from 'react';
import './App.css';
import dogs from './dogs.json'
import Header from './Components/Header/Header';
import Wrapper from './Components/Wrapper/Wrapper';
import DogCard from './Components/DogCard/DogCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        clicked: [],
        dogs: dogs,
        unselectedDogs: dogs
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectDog = id => {
        if(!this.state.clicked.includes(id)){
            this.setState({clicked: [...this.state.clicked, id], topScore: this.state.topScore + 1}, function(){
              console.log(this.state.clicked);
            })
        }else {
            alert('You lose')
        }
        this.shuffleArray(dogs);
    };

    render() {
        return (
           <div >
             <Header score={this.state.topScore}/>
            <div className="content">
                {
                    this.state.dogs.map((dog, index )=> (
                        <DogCard
                            breed={dog.breed}
                            image={dog.image}
                            selectDog={this.selectDog} 
                            id ={dog.id}
                        />
                    ))
                }
              </div>
         </div>
        );
    }
}

export default App;