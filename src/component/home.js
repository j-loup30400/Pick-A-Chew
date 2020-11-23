import React, { Component } from 'react';
import "./home.css"
import chefpika from '../images/chefpikachu.png'
import PokeBubbleText from './PokebubbleText'

class Home extends Component {

    state = {
      showHome: true,
      chefpikachu: chefpika
    }
  
    /*showModal = () => {
      this.setState({
        showIngredients: true
      })
    }*/
  
    render() {
        return (
            this.state.showHome &&
            <div className="home" >
         <div>
            <h1 className="title">Pick a Chew</h1>
        </div>
        <div className="container-home">
          <img className="pikachu-home" alt="pikachu" src="https://24.media.tumblr.com/affe17343df660b60158dcf2f5186726/tumblr_mqbi7mGN9e1sxk0yto1_400.gif"/>

          <img className="homePikachuDesktop" alt="Chef Pikachu." src={this.state.chefpikachu}/>
        
          {/* <img className="poke-bubble" alt="text-area" src="https://www.pngkit.com/png/full/584-5843757_pokemon-dialog-box-pokemon-text-box-png.png"/> */}
          <div className="poke-bubble">
            <PokeBubbleText 
              /*heading={'Pikachu: '}*/
              textData={["Pika-pi! Welcome to Pika-Chew!", "The quick-stop app for all your recipe needs!", "To get started, click on the button below!"]}
            />
          </div>
          <button className="home-button" onClick={this.props.toIngredients}>What can I cook ?</button>
        </div>
      </div>
        )
    }
}

export default Home;




