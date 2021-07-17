import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";
import defaultAvatar from "../default-avatar.jpg";

const FriendCard = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    {isOnline ? (
      <span className={styles.is_online}>{isOnline}</span>
    ) : (
      <span className={styles.is_offline}>{isOnline}</span>
    )}
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </div>
);

FriendCard.defaultProps = {
  url: defaultAvatar,
};

FriendCard.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendCard;
