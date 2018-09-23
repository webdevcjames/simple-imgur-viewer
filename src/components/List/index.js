import React, { Component } from "react"
import PropTypes from "prop-types"

import "./style.styl"


export class List extends Component {

	constructor(props) {
		super(props)

		this.state = {}
	}



	render() {
		const { children, id, title } = this.props
		return (
			<div
				className="ListContainer"
				id={id}
			>
				<div className="ListHeader">
					<h1>{title}</h1>
				</div>
				<div className="List">
					
				</div>
			</div>
		)
	}
}



List.displayName = "List"



List.propTypes = {
	children: PropTypes.node,
	id:       PropTypes.string,
	title:    PropTypes.string,
}



export default List
