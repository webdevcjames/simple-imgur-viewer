import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./style.styl"


export class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {}
	}



	render() {
		const { children, className, id } = this.props
		return (
			<div
				className={classNames("HeaderContainer", className)}
				id={id}
			>
				{children}
			</div>
		)
	}
}



Header.displayName = "Header"



Header.propTypes = {
	children:  PropTypes.node,
	className: PropTypes.string,
	id:  			 PropTypes.string,
}



export default Header
