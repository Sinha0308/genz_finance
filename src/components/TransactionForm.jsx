// src/components/TransactionForm.jsx
import { useState } from "react";

const TransactionForm = ({
  transactions,
  setTransactions,
  nextStep,
  goBackButton = false, // controls whether to show 'Next' or 'Go Back'
}) => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!amount || !category) return;
    setTransactions([
      ...transactions,
      { id: Date.now(), type, amount: parseFloat(amount), category, note },
    ]);
    setAmount("");
    setCategory("");
    setNote("");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">
        Add Your Transactions
      </h2>
      <p className="text-center text-sm text-gray-500 mb-5">
        Enter as many transactions as you want
      </p>

      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setType("income")}
          className={`w-full py-2 rounded-full font-semibold ${
            type === "income"
              ? "bg-green-400 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          ↑ Income
        </button>
        <button
          type="button"
          onClick={() => setType("expense")}
          className={`w-full py-2 rounded-full font-semibold ${
            type === "expense"
              ? "bg-rose-400 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          ↑ Expense
        </button>
      </div>

      <form onSubmit={handleAdd} className="flex flex-col gap-3">
        <input
          type="number"
          placeholder="$ 0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 bg-gray-100 rounded-full outline-none text-sm"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 bg-gray-100 rounded-full outline-none text-sm"
        >
          <option value="">Select category</option>
          <option>Food</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Transport</option>
          <option>Salary</option>
        </select>
        <input
          type="text"
          placeholder="Add a note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-3 bg-gray-100 rounded-full outline-none text-sm"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 mt-2"
        >
          Add Transaction
        </button>
      </form>

      <button
        onClick={nextStep}
        className={`mt-6 w-full py-2 rounded-full text-white font-semibold ${
          goBackButton ? "bg-blue-400" : "bg-pink-400"
        }`}
      >
        {goBackButton ? "Go Back" : "Next"}
      </button>
    </div>
  );
};

export default TransactionForm;
