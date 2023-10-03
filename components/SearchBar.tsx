"use client"
import React from 'react'
import { SearchManufacture } from '.';
import { useState } from 'react';


const SearchBar = () => {
    const [manufacturer, setManufacture] = useState('');
    const handleSearch = () => { }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacture
                    manufacture={manufacturer}
                    setManufacture={setManufacture}
                />
            </div>
        </form>
    );
}

export default SearchBar