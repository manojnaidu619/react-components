import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'


const App = () => {
   return (
    <div class="ui container comments">
        <CommentDetail author="Sam" avatar={faker.image.avatar()}/>
        <CommentDetail author="Arthur" avatar={faker.image.avatar()}/>
        <CommentDetail author="Daniel" avatar={faker.image.avatar()}/>
    </div>
   )
}

ReactDOM.render(<App/>, document.querySelector("#root"))