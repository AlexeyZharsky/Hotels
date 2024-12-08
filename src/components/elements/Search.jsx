import React, { useEffect, useRef, useState } from "react";

const Search = ({setProducts, data}) => {
    const [state, setState] = useState('');
    const ref = useRef(false)

    useEffect(() => {
        if (!ref.current) {
            ref.current = true
        } else {
            setProducts(prev => {return {products: data.filter((item) => item.name.toLocaleLowerCase().includes(state.toLocaleLowerCase()) && !item.isNew),  newProducts: data.filter((item) => item.name.toLocaleLowerCase().includes(state.toLocaleLowerCase()) && item.isNew)}})
        }
    }, [state])

    
    return (
        <input placeholder="введите название отеля..." className="search" onChange={(e) => setState(e.target.value)} type="text" />
    )
}

export default Search;