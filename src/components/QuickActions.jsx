
const QuickActions = ({
  goToAddTransaction,
  goToAnalytics,
  goToChallenge,
  goToFeedPet,
}) => {
  const actions = [
    {
      label: "Add Transactions",
      color: "bg-cyan-400",
      action: goToAddTransaction,
    },
    {
      label: "Feed Pet",
      color: "bg-rose-400",
      action: goToFeedPet,
    },
    {
      label: "Challenges",
      color: "bg-pink-400",
      action: goToChallenge,
    },
    {
      label: "Analytics",
      color: "bg-emerald-400",
      action: goToAnalytics,
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.action}
            className={`w-full p-4 rounded-xl shadow text-white font-semibold text-sm ${action.color}`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
