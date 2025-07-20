
import { useState } from "react";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import AddTransactionPage from "./pages/AddTransactionPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ChallengePage from "./pages/ChallengePage";
import PetPage from "./pages/PetPage";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [goals, setGoals] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  const goToDashboard = () => setCurrentPage("dashboard");
  const goToAddTransaction = () => setCurrentPage("add-transaction");
  const goToAnalytics = () => setCurrentPage("analytics");
  const goToChallenge = () => setCurrentPage("challenge");
  const goToFeedPet = () => setCurrentPage("feed-pet");

  if (currentPage === "dashboard") {
    return (
      <DashboardPage
        transactions={transactions}
        goToAddTransaction={goToAddTransaction}
        goToAnalytics={goToAnalytics}
        goToChallenge={goToChallenge}
        goToFeedPet={goToFeedPet}
        goals={goals}
        setGoals={setGoals}
        goToChallengesPage={goToChallenge}
      />
    );
  }

  if (currentPage === "add-transaction") {
    return (
      <AddTransactionPage
        transactions={transactions}
        setTransactions={setTransactions}
        goBack={goToDashboard}
      />
    );
  }

  if (currentPage === "analytics") {
    return (
      <AnalyticsPage
        transactions={transactions}
        goBack={goToDashboard}
      />
    );
  }

  if (currentPage === "challenge") {
    return (
      <ChallengePage
        goals={goals}
        setGoals={setGoals}
        goBack={goToDashboard}
      />
    );
  }

  if (currentPage === "feed-pet") {
    return (
      <PetPage
        transactions={transactions}
        goBack={goToDashboard}
      />
    );
  }

  return (
    <Home
      transactions={transactions}
      setTransactions={setTransactions}
      nextStep={goToDashboard}
    />
  );
}

export default App;
