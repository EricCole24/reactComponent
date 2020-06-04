import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import picture from '../images/tedd-1.jpg'
function TodoList() {

    return (
        <div class="card-group text-white rounded bg-danger mb-3" style={{ maxWidth: "18rem", marginLeft: "340px", marginTop: "50px" }}>
            <img class="card-img rounded" src={picture} alt="Card" />
            <div class="card-body">
                <h5 class="card-title">About Eric</h5>
                <p class="card-text">Eric, cofounder of teDd Devs is an Aspiring Software
                engineer who also just graduated with an MS in Comptuter Science.</p>

            </div>
        </div>
    )
}
export default TodoList