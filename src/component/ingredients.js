import React, { Component } from 'react'
import PokeBubbleText from './PokebubbleText'
import "./ingredients.css"
import pikachuIngredients from '../images/pikachuIngredients.png'
import SearchBar from './searchBar'
import {fridge} from './fridge'


let magGlassTarget, i;

class Ingredients extends Component {

    state = {
        showIngredients: true
    }

    removeArrow = () => document.querySelector(".css-6q0nyr-Svg").remove()

    searchBarGlass = () => {
        magGlassTarget = document.querySelectorAll(".css-tlfecz-indicatorContainer");
        for (i = 0; i < magGlassTarget.length; i++) {
            magGlassTarget[i].style.padding = "15px"
            magGlassTarget[i].style.backgroundImage = "url('https://friconix.com/png/fi-xnsuhm-search.png')"
            magGlassTarget[i].style.backgroundSize = "contain"
        }
    }
    componentDidMount() {
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.searchBarGlass()
    }


    render() {

        return (
            this.state.showIngredients &&
            <div className="ingredients">
                <div className="ingredients-header">
                    <img className="pikachu-ingredients" src={pikachuIngredients} alt="pikachu" />
                    <div className="bubble-ingredients">
                        <PokeBubbleText
                            stopCounter={140}
                            textData={["Pika-pi! It's time to raid your fridge!", "Select each ingredient in the categories below!"]}
                        />
                    </div>
                </div>

                <section className="ingredients-section">
                        {
                            fridge.list.map(fridgeChoice=>(
                                <>
                                    <p>{fridgeChoice.category}</p>
                                    <img className="ingredients-image" src={fridgeChoice.image} alt={fridgeChoice.category} />
                                    <div className="basic-multi-select">
                                    <SearchBar 
                                    list={fridgeChoice.ingredients}
                                    
                                    />
                                    </div>
                                </>
                            ))
                        }

                </section>
                    <div className="container-home">
                        <button className="home-button" onClick={this.props.toResults}>What can I cook ?</button>
                    </div>
            </div>
        )
    }
}





                    {/* <p>MEAT</p>
                    <img className="ingredients-image" src={meat} alt="meat" />
                    <div className="basic-multi-select">
                        <SearchBar
                        />
                    </div>
                </section>

                <section className="ingredients-section">
                    <p>FISH</p>
                    <img className="ingredients-image" src={fish} alt="fish" />
                    <div className="basic-multi-select">
                        <SearchBar />
                        
                    </div>
                </section>

                <section className="ingredients-section">
                    <p>VEGETABLES</p>
                    <img className="ingredients-image" src={vege} alt="carot" />
                    <div className="basic-multi-select">
                        
                        
                    </div>
                </section>

                <section className="ingredients-section">
                    <p>FRUITS</p>
                    <img className="ingredients-image" src={fruit} alt="fruit" />
                    <div className="basic-multi-select">
                        
                    </div>
                </section>

                <section className="ingredients-section">
                    <p>DAIRY</p>
                    <img className="ingredients-image" src={dairy} alt="cheese" />
                    <div className="basic-multi-select">
                        
                    </div>
                </section>

                <section className="ingredients-section">
                    <p>GRAINS && BAKING</p>
                    <img className="ingredients-image" src={grain} alt="pot" />
                    <div className="basic-multi-select">
                        
                    </div>
                </section>

                <section className="ingredients-section">
                    <p>HERBS & SPICES</p>
                    <img className="ingredients-image" src={herb} alt="pot" />
                    <div className="basic-multi-select">
                        
                    </div>
                </section>

                <section className="ingredients-section">
                    <p>SAUCES</p>
                    <img className="ingredients-image" src={sauce} alt="sauce" />
                    <div className="basic-multi-select">
                        
                    </div>
                </section>
 */}
               

export default Ingredients;