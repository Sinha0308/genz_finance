
import logo from "../assets/logo.jpg";
import Dashboard from "../components/Dashboard";

const DashboardPage = ({
  transactions,
  goToAddTransaction,
  goToAnalytics,
  goToChallenge,
  goToFeedPet, // ✅ Add this
  goals,
  setGoals,
}) => {
  return (
    <div className="min-h-screen bg-white px-4 py-4 max-w-sm mx-auto">
      <img src={logo} alt="Spendzy Logo" className="w-20 h-20 mb-2 mx-auto" />
      <Dashboard
        transactions={transactions}
        goToAddTransaction={goToAddTransaction}
        goToAnalytics={goToAnalytics}
        goToChallenge={goToChallenge}
        goToFeedPet={goToFeedPet} // ✅ Pass it to Dashboard
        goals={goals}
        goToChallengesPage={goToChallenge}
      />
    </div>
  );
};

export default DashboardPage;
