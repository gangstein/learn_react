import React       from "react";
import classes     from "./AnswersList.module.scss";
import AnswersItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
	<ul className={classes.AnswersList}>
		{props.answers.map((answer, index) => {
			return <AnswersItem
				key={index}
				state={props.state ? props.state[answer.id] : null}
				onAnswerClick={props.onAnswerClick}
				answer={answer}
			/>;
		})}
	</ul>
);

export default AnswersList;