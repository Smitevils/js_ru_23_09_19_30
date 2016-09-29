import React from 'react'

export default (props) => {
    const { user } = props
    const { text } = props

    return (
        <div>
          <br/>
          <ul>
            <li>
              <b>{user}</b>
            </li>
            <li>
              {text}
            </li>
          </ul>
          <br/>
        </div>
    )
}
