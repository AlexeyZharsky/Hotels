import React, { useEffect, useState } from "react";

const Search = ({ setProducts, data }) => {
    const [state, setState] = useState('');

    useEffect(() => {
        const filteredProducts = data.filter(item => 
            item.name.toLowerCase().includes(state.toLowerCase())
        );

        setProducts({
            products: filteredProducts.filter(item => !item.isNew),
            newProducts: filteredProducts.filter(item => item.isNew)
        });
        console.log(state);
    }, [state]);

    
    return (
        <input
            placeholder="введите название отеля..."
            className="search"
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
        />
    );
}

export default Search;