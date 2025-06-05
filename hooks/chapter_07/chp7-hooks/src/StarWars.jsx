// import React, { use, Suspense, useEffect, useState } from 'react'
// import axios from 'axios' // npm install axios

// function fetchData(searchTerm) {
//     return new Promise((resolve, reject) => {
//         axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`)
//             .then((res) => {
//                 console.log(res.data.results)
//                 resolve(res.data.results)
//             })
//     })
// }

// const Characters = ({ fetchDataPromise }) => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetchDataPromise.then((data) => {
//             setData(data)
//         })
//     }, [])

//     return (
//         <div>
//         {data.map((item) => {
//             return <div key={item.name}>{item.name}</div>
//         })}
//         </div>
//     )
// }

// function StarWars() {
//     const [searchTerm, setSearchTerm] = useState("luke")
//     return (
//         <Characters fetchDataPromise={fetchData(searchTerm)} />
//     )
// }

// export default StarWars

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function fetchData(searchTerm) {
    return axios.get(`https://swapi.py4e.com/api/people/?search=${searchTerm}`)
        .then((res) => res.data.results)
        .catch((err) => {
            console.error("Error fetching data:", err);
            return [];
        });
}

const Characters = ({ searchTerm }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchTerm) return;

        setLoading(true);
        fetchData(searchTerm).then((results) => {
            setData(results);
            setLoading(false);
        });
    }, [searchTerm]);

    return (
        <div>
            <h3>StarWars Search Results</h3>
            {loading ? <p>Loading...</p> : 
                data.map((item) => (
                    <div key={item.name}>
                        <strong>{item.name}</strong> – Height: {item.height}cm – Gender: {item.gender}
                    </div>
                ))
            }
        </div>
    );
};

function StarWars() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.search.value);
    };

    return (
        <div style={{ padding: 5 }}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search for a character..." />
                <button type="submit">Search</button>
            </form>
            <Characters searchTerm={searchTerm} />
        </div>
    );
}

export default StarWars;
