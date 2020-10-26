import React from 'react';
import s from './News.module.css';
import {compose} from "redux";
import {withAuthRedirect} from "./../../hoc/withAuthRedirect";

const News = (props) => {
    return (
        <div className={s.content}>
            News
        </div>
    )
}

const NewsContainer = compose(
    withAuthRedirect,
)(News)

export default NewsContainer;