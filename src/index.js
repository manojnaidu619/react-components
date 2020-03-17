import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

const App = () => {
   return (
    <div class="ui comments">
        <div class="comment">
        <a class="avatar">
            <img src={faker.image.avatar()}/>
        </a>
            <div class="content">
                <a class="author">Stevie Feliciano</a>
                <div class="metadata">
                <div class="date">2 days ago</div>
                <div class="rating">
                    <i class="star icon"></i>
                    5 Faves
                </div>
                </div>
                <div class="text">
                Hey guys, I hope this example comment is helping you read this documentation.
                </div>
            </div>
        </div>

        <div class="comment">
        <a class="avatar">
            <img src={faker.image.avatar()}/>
        </a>
            <div class="content">
                <a class="author">Stevie Feliciano</a>
                <div class="metadata">
                <div class="date">2 days ago</div>
                <div class="rating">
                    <i class="star icon"></i>
                    5 Faves
                </div>
                </div>
                <div class="text">
                Hey guys, I hope this example comment is helping you read this documentation.
                </div>
            </div>
        </div>

        <div class="comment">
        <a class="avatar">
            <img src={faker.image.avatar()}/>
        </a>
            <div class="content">
                <a class="author">Stevie Feliciano</a>
                <div class="metadata">
                <div class="date">2 days ago</div>
                <div class="rating">
                    <i class="star icon"></i>
                    5 Faves
                </div>
                </div>
                <div class="text">
                Hey guys, I hope this example comment is helping you read this documentation.
                </div>
            </div>
        </div>
    </div>
   )
}

ReactDOM.render(<App/>, document.querySelector("#root"))