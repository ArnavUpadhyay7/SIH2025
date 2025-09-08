import { useState } from "react";
import { cattleDB } from "../utils";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FMsystem() {
  const [query, setQuery] = useState("cow");
  const [data, setData] = useState(cattleDB["cow"]);
  const [hoverFood, setHoverFood] = useState(
    cattleDB["cow"].inventory.typesOfFood[0]
  );

  const handleSearch = () => {
    const key = query.trim().toLowerCase();
    if (cattleDB[key]) {
      setData(cattleDB[key]);
      setHoverFood(cattleDB[key].inventory.typesOfFood[0]); // reset chart
    } else {
      alert(`No data found for "${query}". Try "cow" or "buffalo".`);
    }
  };

  const renderPieChart = (nutrition) => {
    if (!nutrition) return null;
    const labels = Object.keys(nutrition);
    const values = Object.values(nutrition);

    return (
      <Pie
        data={{
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: [
                "#4CAF50",
                "#4FC3F7",
                "#FFD54F",
                "#81C784",
                "#FF8A65",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              position: "bottom",
              labels: { color: "#333", font: { size: 12 } },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-6">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#4CAF50]">
          Food Management System
        </h2>

        {/* Search */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex gap-3 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter animal or breed (e.g., cow, buffalo)"
            className="flex-1 px-4 py-3 rounded-lg bg-white/30 text-gray-900 placeholder-gray-600 outline-none focus:ring-2 focus:ring-[#4FC3F7]"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button type="submit"
            className="cursor-pointer bg-gradient-to-r from-[#4CAF50] to-[#81C784] px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition"
          >
            Search
          </button>
        </form>

        {/* Results */}
        {data && (
          <div className="space-y-10 text-gray-900">
            {/* Cattle Data */}
            <section>
              <h3 className="text-xl font-bold text-[#4CAF50] mb-2">
                Cattle Data
              </h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-800">
                <li>
                  <strong>ID:</strong> {data.cattleData.id}
                </li>
                <li>
                  <strong>Age:</strong> {data.cattleData.age}
                </li>
                <li>
                  <strong>Weight:</strong> {data.cattleData.weight}
                </li>
                <li>
                  <strong>Breed:</strong> {data.cattleData.breed}
                </li>
                <li>
                  <strong>Lactation Stage:</strong>{" "}
                  {data.cattleData.lactationStage}
                </li>
                <li>
                  <strong>Health:</strong> {data.cattleData.healthRecords}
                </li>
                <li>
                  <strong>Diseases:</strong> {data.cattleData.commonDiseases}
                </li>
              </ul>
            </section>

            {/* Inventory */}
            <section>
              <h3 className="text-xl font-bold text-[#4CAF50] mb-3">
                Inventory
              </h3>
              <ul className="flex flex-wrap gap-4">
                {data.inventory.typesOfFood.map((food, idx) => (
                  <li
                    key={idx}
                    onMouseEnter={() => setHoverFood(food)}
                    className="px-4 py-2 bg-[#4FC3F7]/20 rounded-lg cursor-pointer hover:bg-[#FFD54F]/40 transition"
                  >
                    {food.name}
                  </li>
                ))}
              </ul>

              {hoverFood && (
                <div className="mt-6 h-64 w-full">
                  <h4 className="text-lg font-semibold mb-2 text-center text-[#4CAF50]">
                    {hoverFood.name} Nutritional Values
                  </h4>
                  {renderPieChart(hoverFood.nutrition)}
                </div>
              )}
            </section>

            {/* Diet Management */}
            <section>
              <h3 className="text-xl font-bold text-[#4CAF50] mb-2">
                Diet Management
              </h3>
              <p>
                <strong>Daily Ration:</strong> {data.dietManagement.dailyRation}
              </p>
              <p>
                <strong>Special Diet:</strong> {data.dietManagement.specialDiet}
              </p>
            </section>

            {/* Cost Management */}
            <section>
              <h3 className="text-xl font-bold text-[#4CAF50] mb-2">
                Cost Management
              </h3>
              <p>
                <strong>Feed Purchase Cost:</strong>{" "}
                {data.costManagement.feedPurchaseCost}
              </p>
              <p>
                <strong>Daily/Monthly:</strong>{" "}
                {data.costManagement.dailyMonthlyExpenses}
              </p>
            </section>

            {/* Analytics */}
            <section>
              <h3 className="text-xl font-bold text-[#4CAF50] mb-2">
                Analytics (ROI)
              </h3>
              <p>
                <strong>Cost vs Yield:</strong>{" "}
                {data.analytics.costVsYieldAnalysis}
              </p>
            </section>

            {/* Seasonal / Climate */}
            <section>
              <h3 className="text-xl font-bold text-[#4CAF50] mb-2">
                Seasonal & Climate Impact
              </h3>
              <p>{data.seasonalClimateImpact}</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
