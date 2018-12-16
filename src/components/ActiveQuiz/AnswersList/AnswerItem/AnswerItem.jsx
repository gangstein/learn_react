import React   from "react";
import classes from "./AnswerItem.module.scss";

const AnswersItem = props => {
	const classV = [classes.AnswerItem];

	if (props.state) {
		classV.push(classes[props.state]);
	}

	return (
		<li className={classV.join(' ')}
		    onClick={() => props.onAnswerClick(props.answer.id)}
		>
			{props.answer.text}
		</li>
	);
};

export default AnswersItem;