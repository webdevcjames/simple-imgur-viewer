import React, { Component } from "react"
import PropTypes from "prop-types"

import style from "./style.styl"


export class Footer extends Component {

	constructor(props) {
		super(props)

		this.state = {}
	}



	render() {
		const { children, id } = this.props
		return (
			<div
				className="FooterContainer"
				id={id}
			>
				<div className="Footer">
					{children}
				</div>
			</div>
		)
	}
}



Footer.displayName = "Footer"



Footer.propTypes = {
	children: PropTypes.node,
}



export default Footer
