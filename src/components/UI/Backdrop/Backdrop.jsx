import React            from "react";
import { TimelineLite } from "gsap";
import "./Backdrop..scss";

class Backdrop extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = null;
	}

	componentDidMount() {
		new TimelineLite({ onComplete: () => console.log("enter") })
			.to(this.inputRef, 0.2, { autoAlpha: 1 });
	}

	render() {
		return (
			<div
				className='Backdrop'
				ref={div => this.inputRef = div}
				onClick={() => {
					new TimelineLite({ onComplete: () => this.props.onClose() })
						.to(this.inputRef, 0.2, { autoAlpha: 0 });
				}}
			/>
		);
	}

}

export default Backdrop;
