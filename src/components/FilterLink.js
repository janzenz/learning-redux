import React, { Component, PropTypes } from 'react'

class FilterLink extends Component {
    _onClick = () => {
        this.props.handleFilter(this.props.filter)
    }

    render() {
        return <a 
            href="#" 
            onClick={this._onClick}
        >{this.props.children}</a>
    }
}

export default FilterLink