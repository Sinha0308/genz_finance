
const SavingsGoals = ({ balance, goals, goToChallengesPage }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow border">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">🎯 Saving Goals</h3>
        <button
          onClick={goToChallengesPage}
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          View All
        </button>
      </div>
      {goals.length === 0 ? (
        <p className="text-sm text-gray-500">No goals yet. Add one from Challenges.</p>
      ) : (
        goals.slice(0, 2).map((goal) => (
          <div key={goal.id} className="mb-2">
            <div className="text-sm font-medium">{goal.title}</div>
            <div className="text-xs text-gray-600">Target: ${goal.amount}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default SavingsGoals;
