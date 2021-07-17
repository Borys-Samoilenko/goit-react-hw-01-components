import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";
import FriendCard from "./friends-list-card";

const FrinedsList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        <FriendCard avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FrinedsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FrinedsList;
