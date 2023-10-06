"use client"
import React from 'react'
import { SearchManufacture } from '.';
import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="magnifying-glass.svg"
            alt="img"
            width={40}
            height={40}
            className="object-contain" />
    </button>

)

const SearchBar = () => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.
        FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (category == '' && name === '') {
            return alert('Please fill in the search bar');
        }
        updateSearchParams(
            category.toLocaleLowerCase(),
            name.toLocaleLowerCase(),
        )
    }
    const updateSearchParams = (category: string, name: string,) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (name) {
            searchParams.set('name', name)
        } else {
            searchParams.delete('name')
        }
        if (category) {
            searchParams.set('category', category)
        } else {
            searchParams.delete('category')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname, { scroll: false })
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacture
                    category={category}
                    setCategory={setCategory}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className='searchbar__item'>
                <Image
                    src="/sushi.png"
                    width={25}
                    height={25}
                    alt="car model"
                    className='absolute w-[20px] h-[20px] ml-4 ' />
                <input
                    type="text"
                    name="model"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Sushi'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />

            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form >
    );
}

export default SearchBar