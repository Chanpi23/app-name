import React, {useState} from "react";

const CitySearch= ({getAirQuality}) => {
const [inputValue, setInputValue] = useState('')   

const handleInputChange =(event) => {
    setInputValue(event.target.value)
}

const handleSearch = (event) => {
    event.preventDefault()
    const formattedCity = inputValue.replace(/ /g, '-')
}



    return (
<form onSubmit ={handleSearch} className='mb-4'>
    <input type='text' placeholder='Enter city ...'onChange={handleInputChange}></input>
    <button type = 'Submit' className="btn btn-primary mt-3">Search</button>
</form>

    )
}