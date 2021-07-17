import React from "react";
import Profile from "./components/social-profile/Profile";
import user from "./components/social-profile/user.json";
import FriendsList from "./components/friend-list/friends-list";
import friends from "./components/friend-list/friends.json";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";
import TransactionHistory from "./components/trasaction-history/TransactionHistory";
import transactions from "./components/trasaction-history/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
