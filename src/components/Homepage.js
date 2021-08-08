import React, {useState, useEffect} from 'react'
import Card from './Card'
import '../styles/Homepage.css'
import { RiSearchEyeLine } from "react-icons/ri";
function Homepage() {

    const [characterData, setCharacterData] = useState([])
    const [search, setSearch] = useState("")
    const [searchAttribute, setSearchAttribute] = useState("name")

    const getData = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://witcher3api.com/api/characters/${searchAttribute}/${search}`);
        const data = await response.json();
        
        setCharacterData(data);
    }


    const getSearch = (e) => {
        setSearch(e.target.value);
        
    }

    const getAttribute = (e) => {
        
        setSearchAttribute(e.target.value);
    }

    
    

    return (
        <div className="homepage__container">
            <h1 className="welcome__text">How You Like That Silver</h1>
            <div className="search__bar">
                <form className="search__form" >
                    <input type="text" placeholder="" className="search__box" onChange={getSearch}/>
                    <button className="search__btn" onClick={getData}><RiSearchEyeLine /> </button>
                    <select className="attribute__selector" onClick={getAttribute} name="" id="">
                        <option value="name">Name</option>
                        <option value="gender">Gender</option>
                        <option value="race">Race</option>
                        <option value="profession">Profession</option>
                        <option value="Nationality">Nationality</option>
                        <option value="fappearance">First Appearance</option>
                    </select>
                    
                </form>
                
            </div>
            <div className="result__cards__container">

                {characterData.map(character => (
                    <Card 
                        image={character.image}
                        name={character.name}
                        profession={character.profession}
                        nationality={character.nationality}
                        race={character.race}
                        gender={character.gender}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default Homepage
