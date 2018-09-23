import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./style.styl"


export class BoardListItem extends Component {

	constructor(props) {
		super(props)

		this.state = {}
	}



	render() {
		const {
			id, title, description, subForums,
			latestPost, numViewers, numThreads, numReplies,
			status
		} = this.props
		return (
			<div
				className="BoardListItemContainer"
				id={id}
			>
				<div className="BoardListItem">
					<div className={classNames("BoardListItemStatus", status)} />
					<div className={classNames("BoardListItemContent")}>
						<a href="#">{title}</a>
						<div>{description}</div>
					</div>
					<div className={classNames("BoardListItemExtraInfo")}>
					</div>
				</div>
			</div>
		)
	}
}



BoardListItem.displayName = "BoardListItem"



BoardListItem.propTypes = {
	description: PropTypes.string,
	id:          PropTypes.string,
	latestPost:  PropTypes.object,
	numReplies:  PropTypes.number,
	numThreads:  PropTypes.number,
	numViewers:  PropTypes.number,
	status:      PropTypes.array,
	subForums:   PropTypes.array,
	title:       PropTypes.string,
}



export default BoardListItem
