
import SavingsGoals from "./SavingsGoals";
import QuickActions from "./QuickActions";

const Dashboard = ({
  transactions,
  goToAddTransaction,
  goToAnalytics,
  goToChallenge,
  goToFeedPet,
  goals,
  goToChallengesPage,
}) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;
  const recentTransactions = [...transactions].reverse().slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Balance Info */}
      <div className="text-center">
        <h3 className="text-gray-400 text-sm">Total Balance</h3>
        <h1 className="text-3xl font-bold text-blue-600">${balance.toFixed(2)}</h1>

        {/* 🧠 Real-Time Feedback on Spending Habits */}
        {income === 0 ? (
          <p className="text-sm text-gray-500 mt-1">
            🪙 Add income to start tracking your finances.
          </p>
        ) : expenses / income > 0.9 ? (
          <p className="text-sm text-red-500 font-medium mt-1">
            ⚠️ You're spending almost everything! Consider saving more.
          </p>
        ) : expenses / income > 0.7 ? (
          <p className="text-sm text-yellow-500 font-medium mt-1">
            😬 Spending is getting high. Try to cut back a little!
          </p>
        ) : expenses / income < 0.4 ? (
          <p className="text-sm text-green-600 font-medium mt-1">
            🎉 Great job keeping expenses low!
          </p>
        ) : (
          <p className="text-sm text-blue-500 font-medium mt-1">
            👍 You're maintaining a healthy balance.
          </p>
        )}
      </div>

      {/* Savings Goals */}
      <SavingsGoals
        balance={balance}
        goals={goals}
        goToChallengesPage={goToChallengesPage}
      />

      {/* Recent Transactions */}
      <div>
        <h3 className="font-semibold text-lg mb-2">🧾 Recent Transactions</h3>
        {recentTransactions.length === 0 ? (
          <p className="text-gray-500 text-sm">No transactions yet.</p>
        ) : (
          <ul className="space-y-2">
            {recentTransactions.map((t, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-3 rounded-lg shadow-sm ${
                  t.type === "income" ? "bg-green-50" : "bg-red-50"
                } border`}
              >
                <div className="text-left">
                  <p className="font-medium">{t.description}</p>
                  <p className="text-xs text-gray-500 capitalize">
                    {t.category || "uncategorized"} • {t.type}
                  </p>
                </div>
                <div
                  className={`font-semibold ${
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}${t.amount.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Quick Actions */}
      <QuickActions
        goToAddTransaction={goToAddTransaction}
        goToAnalytics={goToAnalytics}
        goToChallenge={goToChallenge}
        goToFeedPet={goToFeedPet}
      />
    </div>
  );
};

export default Dashboard;
