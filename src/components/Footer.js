import React, { Component, PropTypes } from 'react'
import FilterLink from './FilterLink'

class Footer extends Component {
    _handleFilter = (filter) => {
        console.log(filter)
    }

    render() {
        return <div>
            <FilterLink filter="SHOW_COMPLETED" handleFilter={this._handleFilter}>
                Show Completed
            </FilterLink>{", "}
            <FilterLink filter="SHOW_ACTIVE" handleFilter={this._handleFilter}>
                Show Active
            </FilterLink>{", "}
            <FilterLink filter="SHOW_ALL" handleFilter={this._handleFilter}>
                Show All
            </FilterLink>
        </div>
    }
}

export default Footer