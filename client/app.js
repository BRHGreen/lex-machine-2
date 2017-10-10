import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class CommentBox extends Component {
  render() {
    return (
      <div>
        <p>Yo, all seems to be working yeah?</p>
      </div>
    )
  }
}

ReactDOM.render(
  <CommentBox />,
  document.querySelector('#root')
)
