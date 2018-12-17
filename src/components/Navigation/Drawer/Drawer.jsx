import React, { Component, Fragment } from "react";
import classes                        from "./Drawer.module.scss";
import Backdrop                       from "../../UI/Backdrop/Backdrop";

export default class Drawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [
				"1", "2", "3"
			]
		};
	}


	renderLinks = () => {
		return this.state.links.map((link, i) => {
			return (
				<li key={i}>
					Link {link}
				</li>

			);
		});
	};

	render() {
		const cls = [
			classes.Drawer
		];
		if (!this.props.isOpen) {
			cls.push(classes.close);
		}
		return (
			<Fragment>
				{this.props.isOpen ?
					<Backdrop onClose={this.props.onClose}/> :
					null}
				<nav className={cls.join(" ")}>
					<ul>
						{this.renderLinks()}
					</ul>
				</nav>
			</Fragment>

		);
	}
}
