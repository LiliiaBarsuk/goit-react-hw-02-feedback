import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonNames = Object.keys(options);
    return (
        <>
    <List>
        {buttonNames.map(name => (<li key={name}><Button onClick={() => onLeaveFeedback(name)} type="button">{name}</Button></li>))}
    </List></>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}