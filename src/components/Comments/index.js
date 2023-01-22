import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const intialData = [{id: 1, name: 'uday', comment: 'hello this uday mattela'}]
class Comments extends Component {
  state = {name: '', comment: '', commentsData: intialData}

  onsumbmit = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      commentsData: [...prevState.commentsData, newComment],
      name: '',
      comment: '',
    }))
  }

  onchaningofTextArea = event => {
    this.setState({comment: event.target.value})
  }

  onchangeText = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {commentsData} = this.state
    return (
      <div>
        <h1 className="commentsHeading">Comments</h1>
        <div className="flex_container">
          <div className="form_container">
            <form onSubmit={this.onsumbmit}>
              <h1 className="form_heading">
                Say something about 4.0 technologies
              </h1>
              <input
                type="text"
                className="text_input"
                placeholder="inter your name"
                onChange={this.onchangeText}
              />
              <textarea
                rows="12"
                cols="45"
                className="textArea"
                placeholder="write your commet"
                onChange={this.onchaningofTextArea}
              />
              <button type="submit" className="addbutton">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="comments_image"
            />
          </div>
        </div>
        <hr />
        <ul>
          {commentsData.map(each => (
            <CommentItem
              name={each.name}
              comment={each.comment}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
