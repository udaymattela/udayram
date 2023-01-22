import {Component} from 'react'
import './index.css'

export default class CommentItem extends Component {
  render() {
    const {name, comment} = this.props
    return (
      <div className="comment_container">
        <h1 className="letter">{name[0]}</h1>
        <div className="name_section">
          <h1>{name}</h1>
          <p>{comment}</p>
        </div>
      </div>
    )
  }
}
