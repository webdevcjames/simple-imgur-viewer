import React, { Component as Container } from "react"
import PropTypes from "prop-types"

import axios from "axios"
import classNames from "classnames"
import moment from "moment-timezone"
import range from "lodash/range"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import List from "../../components/List"

import logo from "./logo.svg"
import "./style.styl"



const albumsURL = "https://api.imgur.com/3/account/triggertortoise/albums/"
const albumURL  = "https://api.imgur.com/3/account/triggertortoise/album/"



export class App extends Container {

	constructor(props) {
		super(props)

		this.state = {
			items: []
		}

		this.loadAlbums()
	}



	async loadAlbums() {
		axios.get(albumsURL, {
			headers: { "Authorization": "Client-ID fb9c5e923bd3e60" }
		})
			.then(({ data: { data } }) => {
				if (data) {

					const baseImageURL = "https://i.imgur.com/"
					const coverExt 		 = ".jpg"

					const albums = data.map(({
						id,
						link,
						cover,
						title,
						description,
						images_count: numImages,
						privacy,
						datetime: date,
					}) => ({
						id,
						link,
						cover: cover ? `${baseImageURL}${cover}${coverExt}` : undefined,
						title,
						description,
						numImages,
						privacy,
						date,
						dateFormatted: moment.tz(date, "X", moment.tz.guess()).format("ddd DD MMM MM YYYY HH:mm:ssZZ (z)"),
					}))

					console.log(albums)

					this.setState({ items: albums })					
				}
			})
			.catch(error => {
				console.warn(error)
			})
	}



	async loadAlbum(id) {
		axios.get(`${albumURL}${id}`, {
			headers: { "Authorization": "Client-ID fb9c5e923bd3e60" }
		})
			.then(({ data: { data } }) => {
				if (data) {

					console.log(data.images)

					// this.setState({ items: albums })					
				}
			})
			.catch(error => {
				console.warn(error)
			})
	}



	render() {
		const { items } = this.state

		return (
			<div className="AppContainer">
				<Header>
					<img className="AppLogo" src={logo} />
				</Header>

				<div className="AppBody">
					<h1>Dashboard</h1>

					<div className="albumList" style={{ display: "flex", flexWrap: "wrap", padding: "16px 0 16px 16px" }}>
						{items && items.map(({ id, link, cover, title, description, numImages }) => (
							<div
								key={id}
								className="albumListItem"
								onClick={() => this.loadAlbum(id)}
							>
								<div className="albumCover">
									<div
										className="albumCoverInner"
										style={{ backgroundImage: cover ? `url(${cover})` : "none" }}
									/>
								</div>
								<div className="albumInfo">
									<h3 className={classNames({ subdued: !title })}>
										{title || "No Title"}
									</h3>
									<p className={classNames({ subdued: !description })}>
										{description || "No Description"}
									</p>
									<div className={classNames("numSpot", { subdued: !numImages })}>
										{numImages}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				
				<Footer>
					<p>
						Footer Content
					</p>
				</Footer>
			</div>
		)
	}
}



App.displayName = "App"



App.propTypes = {}



export default App
