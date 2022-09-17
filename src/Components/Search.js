import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordian from '../Accordian';
import "./Search.css"

const Search = () => {
    return (
        <div className="Container" style={{ minHeight: "90vh", height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <div className="search__container" style={{ display: 'flex', flexDirection: 'row', flex: 0.1, margin: "15px", alignItems: 'center', justifyContent: 'space-evenly', position: 'sticky', top: '30px' }}>
                <div className="search">
                    <TextField id="standard-basic" label="Search" variant="standard" style={{ width: '85vw' }} />
                </div>
                <div className="search__btn" >
                    <Button variant="contained">Search</Button>
                </div>
            </div>
            <div className="image__container" style={{ flex: 0.9, margin: '4.5vh', maxHeight:'60vh', overflowY:"scroll", borderRadius:'10px', padding:'4vw' }}>
                {/* Image component will be here */}
                <div className="accordians__container">
                    <Accordian />
                    <Accordian />
                    <Accordian />
                    <Accordian />
                    <Accordian />
                    <Accordian />
                    <Accordian />
                    <Accordian />
                    <Accordian />
                    <Accordian />
                    <Accordian />
                </div>


            </div>
        </div>
    )
}

export default Search
