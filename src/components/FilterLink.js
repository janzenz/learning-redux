import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class FilterLink extends Component {
    render() {
        const { filter, children } = this.props
        return <Link
                    to={filter === 'all' ? '' : filter}
                >
                    {children}
                </Link>
    }
}

FilterLink.propType = {
	filter: PropTypes.string.isRequired
}

export default FilterLink
