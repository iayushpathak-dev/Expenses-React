import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;    //Concept Of Compositions where we wrap a classes with components
}

export default Card;