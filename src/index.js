import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'


const App = () => {
   return (
    <div class="ui container comments">
        <ApprovalCard><CommentDetail author="Sam" avatar={faker.image.avatar()} message="Cool man!"/></ApprovalCard>
        <CommentDetail author="Arthur" avatar={faker.image.avatar()} message="I like this"/>
        <CommentDetail author="Daniel" avatar={faker.image.avatar()} message="Amazing Post..."/>
    </div>
   )
}

ReactDOM.render(<App/>, document.querySelector("#root"))