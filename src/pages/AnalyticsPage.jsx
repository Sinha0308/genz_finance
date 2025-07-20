import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import logo from "../assets/logo.jpg";

const COLORS = ["#f87171", "#60a5fa", "#facc15", "#34d399", "#c084fc", "#f472b6"];

const AnalyticsPage = ({ transactions, goBack }) => {
  const expenseCategories = useMemo(() => {
    const map = {};
    transactions.forEach((t) => {
      if (t.type === "expense") {
        map[t.category] = (map[t.category] || 0) + t.amount;
      }
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [transactions]);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const savingRate = income ? (((income - expenses) / income) * 100).toFixed(1) : 0;

  const topCategory = expenseCategories.sort((a, b) => b.value - a.value)[0];

  const summaryData = [
    { label: "Income", value: income },
    { label: "Expense", value: expenses },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-4 max-w-sm mx-auto space-y-6">
      <img src={logo} alt="Spendzy Logo" className="w-20 h-20 mb-2 mx-auto" />
      <h2 className="text-center text-2xl font-bold">📊 Analytics</h2>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <h3 className="font-semibold text-center mb-2">Spending by Category</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={expenseCategories}
              cx="50%"
              cy="50%"
              outerRadius={70}
              dataKey="value"
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            >
              {expenseCategories.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Income vs Expense */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <h3 className="font-semibold text-center mb-2">Income vs Expense</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={summaryData}>
            <XAxis dataKey="label" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Bar dataKey="value" fill="#60a5fa" radius={[10, 10, 0, 0]} />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Saving Rate & Top Category */}
      <div className="text-sm text-center space-y-2">
        <p className="text-green-600 font-medium">
          🚀 Saving Rate: {savingRate}%
        </p>
        {topCategory && (
          <p className="text-red-500 font-medium">
            💸 Most spent on: {topCategory.name} — ${topCategory.value.toFixed(2)}
          </p>
        )}
      </div>

      {/* Back Button */}
      <button
        onClick={goBack}
        className="mt-4 w-full py-3 rounded-full bg-blue-400 text-white font-semibold"
      >
        Go Back
      </button>
    </div>
  );
};

export default AnalyticsPage;
