import React from 'react';

function Bus(){

    fetch("http://localhost:3001/api")
    .then(res => res.json())
    .then(data => console.log(data.username))


    return (
        <div></div>
    );
}

export default Bus;