
import { useState } from "react";
import logo from "../assets/logo.jpg";

const ChallengePage = ({ goals, setGoals, goBack }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    setGoals([...goals, { id: Date.now(), title, amount: parseFloat(amount) }]);
    setTitle("");
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-4 max-w-sm mx-auto">
      <img src={logo} alt="Spendzy Logo" className="w-20 h-20 mb-4 mx-auto" />
      <h2 className="text-xl font-bold text-center mb-4">🎯 Saving Challenges</h2>

      {/* Existing Goals */}
      <div className="space-y-3 mb-6">
        {goals.length === 0 ? (
          <p className="text-center text-gray-500">No goals yet. Add one!</p>
        ) : (
          goals.map((goal) => (
            <div key={goal.id} className="bg-gray-100 rounded-xl p-3 shadow">
              <h4 className="font-semibold">{goal.title}</h4>
              <p className="text-sm text-gray-600">Target: ${goal.amount.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>

      {/* Add Goal Form */}
      <form onSubmit={handleAddGoal} className="space-y-3">
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 bg-gray-100 rounded-full outline-none text-sm"
        />
        <input
          type="number"
          placeholder="$ Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 bg-gray-100 rounded-full outline-none text-sm"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-pink-500 text-white font-semibold"
        >
          Add Goal
        </button>
      </form>

      <button
        onClick={goBack}
        className="mt-6 w-full py-2 rounded-full text-white font-semibold bg-blue-400"
      >
        Go Back
      </button>
    </div>
  );
};

export default ChallengePage;
