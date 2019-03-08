import React            from 'react';
import { TimelineLite } from 'gsap';
import './Backdrop..scss';

const duration = 200;

class Backdrop extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = null;
	}

	componentDidMount() {
		this.LineEnter = new TimelineLite();
		this.LineEnter.to(this.inputRef, duration / 1000, { autoAlpha: 1 });
		this.LineEnter.play();

	}

	onClose = close => () => {
		this.LineEnter.reverse();
		setTimeout(() => {
			close();
		}, duration);
	};

	render() {
		return (
			<div
				className="Backdrop"
				ref={div => ( this.inputRef = div )}
				onClick={this.onClose(this.props.onClose)}
			/>
		);
	}
}

export default Backdrop;
