import React, { Component } from "react";

class Nicknames extends Component {
    render() {
        let nicknames = [
            "Marve",
            "MK",
            "Marvel",
            "Marvie"
        ];

        let nameLoop = nicknames.map(name => {
            return <li key={nicknames.toString()}>{name}</li>

        });

        return (
            <div>
                <h2>Nicknames:</h2>
                <ul>{nameLoop}</ul>
            </div>
        )
    }
}

export default Nicknames;