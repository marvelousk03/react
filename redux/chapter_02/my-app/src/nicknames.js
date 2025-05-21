import React, {Component} from "react";

class Nicknames extends Component {
    render () {
        let nicknames = ["Marve", "MK", "Marvel", "Marvie"];

        let nameLoop = nicknames.map(name =>{
            return name
        });

        return (
            <div><h3>{"" + nameLoop}</h3></div>
        )
    }
}

export default Nicknames;