
import logo from "../assets/logo.jpg";

const PetPage = ({ transactions, goBack }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const savingRate = income ? ((income - expenses) / income) * 100 : 0;

  const showBadge = Math.round(savingRate) === 100;
  const showHat = savingRate >= 70 && savingRate < 100;
  const showSmile = savingRate >= 50 && savingRate < 70;
  const growSize = savingRate >= 30 && savingRate < 50;
  const showSad = savingRate < 30;

  const petSize = growSize ? "w-36 h-36" : "w-28 h-28";

  return (
    <div className="min-h-screen bg-white px-4 py-4 max-w-sm mx-auto text-center">
      <img src={logo} alt="Logo" className="w-20 h-20 mb-4 mx-auto" />
      <h2 className="text-xl font-bold mb-4">🐾 Your Pet's Mood</h2>

      {/* Pet Visual */}
      <div className="relative mx-auto mb-4">
        {/* Hat */}
        {showHat && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="w-12 h-6 bg-blue-700 rounded-t-full border border-black shadow" />
            <div className="w-16 h-2 bg-black mt-[-2px] rounded" />
          </div>
        )}

        {/* Pet Body */}
        <div
          className={`bg-yellow-300 rounded-full border-4 border-black ${petSize} mx-auto flex items-center justify-center`}
        >
          <div className="text-4xl">
            {showSad ? "😢" : showSmile ? "😊" : "😐"}
          </div>
        </div>

        {/* Badge */}
        {showBadge && (
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
            <div className="text-sm bg-red-500 text-white px-2 py-1 rounded-full shadow">
              🏅 Badge
            </div>
          </div>
        )}
      </div>

      {/* Message */}
      <p className="text-gray-700 font-medium mb-4">
        {showBadge && "🏅 Amazing! You've saved 100% — your pet earned a badge!"}
        {showHat && "🎩 Great job! Your pet is wearing a fancy hat!"}
        {showSmile && "😊 Your pet is smiling from your smart saving!"}
        {growSize && "🐶 Your pet is growing bigger!"}
        {showSad && income > 0 && "😢 Save more! Your pet is sad."}
        {income === 0 && "Add income to see your pet evolve!"}
      </p>

      {/* Criteria Box */}
      <div className="text-left text-sm bg-gray-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold mb-2">📊 Pet Upgrade Criteria:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>💯 Save 100% → Pet earns a badge 🏅</li>
          <li>🎩 Save 70%–99% → Pet wears a hat</li>
          <li>😊 Save 50%–69% → Pet smiles</li>
          <li>🐾 Save 30%–49% → Pet grows bigger</li>
          <li>😢 Save less than 30% → Pet is sad</li>
        </ul>
      </div>

      {/* Go Back Button */}
      <button
        onClick={goBack}
        className="w-full py-2 mt-6 rounded-full bg-blue-500 text-white font-semibold"
      >
        Go Back
      </button>
    </div>
  );
};

export default PetPage;
