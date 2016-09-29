import React, { Component } from 'react'

export default class Article extends Component {

    state = {
        isOpen: false,
        isCommentsOpen: false,
        opened: {
            a: true
        }
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        const { isCommentsOpen } = this.state

        const { comments } = this.props

        const commentsList = comments.map(comment => <div key={comment.id}><b>{comment.user}</b><i>{comment.text}</i></div>)

        const body = isOpen ? <section>{article.text}<div onClick = {this.toggleCommentsOpen}><b>Open comments</b></div></section> : null

        const commentsBox = isCommentsOpen ? <section>{commentsList}</section> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                    {body}
                <div>
                    {commentsBox}
                </div>
            </div>
        )
    }

    toggleOpen = ev => {
      this.setState({
          isOpen: !this.state.isOpen
      })
    }
    toggleCommentsOpen = evt => {
      this.setState({
          isCommentsOpen: !this.state.isCommentsOpen
      })
    }
}



/*
export default (props) => {
    const { article } = props

    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
