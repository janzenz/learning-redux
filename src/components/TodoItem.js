import React, { Component, PropTypes } from 'react'

class TodoItem extends Component {
    _onClick = (e) => {
        this.props.onTodoClick(this.props.id)
    }

    render() {
        const { id, text, completed } = this.props;
        return <li
                onClick={this._onClick}
                style={{
                    textDecoration: completed ?
                        'line-through' :
                        'none'
                }}
            >
                {text}
            </li>
    }
}

TodoItem.propType = {
    id: PropTypes.number.isRequired,
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem
