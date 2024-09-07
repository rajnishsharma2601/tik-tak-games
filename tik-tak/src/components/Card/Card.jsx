import Icon from "../Icon/Icon";
import './Card.css'

function Card({ player, onPlay, index }) {
    let icon = null; // Default to no icon
    if (player === 'x') {
        icon = <Icon name="cross" />;
    } else if (player === '0') {
        icon = <Icon name="circle" />;
    }

    return (
        <div className="card" onClick={() => onPlay(index)}>
            {icon}
        </div>
    );
}

export default Card;

