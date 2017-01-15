import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FilterLink from './FilterLink'
import * as actions from '../actions'

class Footer extends Component {
    _handleFilter = (filter) => {
        this.props.dispatch(actions.setVisibilityFilter(filter))
    }

    render() {
        return <div>
            <FilterLink filter={actions.VisibilityFilters.SHOW_COMPLETED} handleFilter={this._handleFilter}>
                Show Completed
            </FilterLink>{", "}
            <FilterLink filter={actions.VisibilityFilters.SHOW_ACTIVE} handleFilter={this._handleFilter}>
                Show Active
            </FilterLink>{", "}
            <FilterLink filter={actions.VisibilityFilters.SHOW_ALL} handleFilter={this._handleFilter}>
                Show All
            </FilterLink>
        </div>
    }
}

export default connect()(Footer)