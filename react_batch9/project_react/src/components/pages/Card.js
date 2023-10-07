import React from 'react'

export default function Card({ele}) {

    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title :{ele.title}</h5>
                <p class="card-text">{ele.description}</p>
                <p class="card-text">Brand: {ele.brand}</p>
                <a href="#" class="btn btn-primary">View card</a>
            </div>
        </div>
    )
}
