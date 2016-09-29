import React, { Component } from 'react'

export default class Article extends Component {

    state = {
        isOpen: false,
        opened: {
            a: true
        }
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state

        const { comments } = this.props
        //console.log(comments)
        //const navNodes = comments ? comments.map(comment => <div key={comment.text}></div>) : [];
        const comments = comments.map(comment => <div key={comment.id}></div>)

        const body = isOpen ? <section>{article.text}</section> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                    {body}
                <div>
                    {comments}
                </div>
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
/*

        this.setState({
            opened: {...this.state.opened, a: false}
        })
*/
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
