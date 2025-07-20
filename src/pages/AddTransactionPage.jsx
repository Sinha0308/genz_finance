// src/pages/AddTransactionPage.jsx
import TransactionForm from "../components/TransactionForm";
import logo from "../assets/logo.jpg";

const AddTransactionPage = ({ transactions, setTransactions, goBack }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-6 py-4">
      <img src={logo} alt="Spendzy Logo" className="w-20 h-20 mb-4" />
      <TransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
        nextStep={goBack}
        goBackButton
      />
    </div>
  );
};

export default AddTransactionPage;
