import React, { Component } from 'react'

import CommentsBlock from './Comments'

export default class Article extends Component {

    state = {
        isArticleOpen: false,
        isCommentsOpen: false
    }

    render() {
        const { article } = this.props
        const { isArticleOpen } = this.state
        const { isCommentsOpen } = this.state
        const { comments } = this.props ? this.props : []

        const commentsList = comments.map(comment => <CommentsBlock key={comment.id} user={comment.user} text={comment.text}/>)

        const body = isArticleOpen ? <section>{article.text}<br/><br/><div onClick = {this.toggleCommentsOpen}><b>Open comments</b></div></section> : null

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

    toggleOpen = () => {
      this.setState({
          isArticleOpen: !this.state.isArticleOpen
      })
    }
    toggleCommentsOpen = () => {
      this.setState({
          isCommentsOpen: !this.state.isCommentsOpen
      })
    }
}
