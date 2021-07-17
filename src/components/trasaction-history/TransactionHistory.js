import PropTypes from "prop-types";
import Transaction from "./Transaction";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.th}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currrency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.tr}>
          <Transaction type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
