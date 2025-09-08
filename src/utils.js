// utils.js
export const cattleDB = {
  cow: {
    cattleData: {
      id: "COW001",
      age: "4 years",
      weight: "450 kg",
      breed: "Holstein Friesian",
      lactationStage: "Mid-lactation",
      healthRecords: "Vaccinated, dewormed",
      commonDiseases: "Mastitis, Foot and Mouth",
    },
    inventory: {
      typesOfFood: [
        {
          name: "Hay",
          nutrition: {
            Protein: 19,
            Fats: 6,
            Carbohydrates: 28,
            Fiber: 35,
            Minerals: 12,
          },
        },
        {
          name: "Silage",
          nutrition: {
            Protein: 15,
            Fats: 5,
            Carbohydrates: 40,
            Fiber: 30,
            Minerals: 10,
          },
        },
        {
          name: "Concentrates",
          nutrition: {
            Protein: 22,
            Fats: 8,
            Carbohydrates: 45,
            Fiber: 15,
            Minerals: 10,
          },
        },
      ],
    },
    dietManagement: {
      dailyRation: "25 kg/day (roughage + concentrates)",
      specialDiet: "Extra protein supplements during pregnancy",
    },
    costManagement: {
      feedPurchaseCost: "$150/month",
      dailyMonthlyExpenses: "Approx. $5/day or $150/month",
    },
    analytics: {
      costVsYieldAnalysis: "Feed-to-milk conversion: 1.3 liters per kg of feed",
    },
    seasonalClimateImpact:
      "Milk yield reduces by 10% during peak summer due to heat stress",
  },

  buffalo: {
    cattleData: {
      id: "BUF001",
      age: "5 years",
      weight: "500 kg",
      breed: "Murrah",
      lactationStage: "Early lactation",
      healthRecords: "Vaccinated",
      commonDiseases: "Hemorrhagic Septicemia, Foot Rot",
    },
    inventory: {
      typesOfFood: [
        {
          name: "Green Fodder",
          nutrition: {
            Protein: 18,
            Fats: 7,
            Carbohydrates: 32,
            Fiber: 30,
            Minerals: 13,
          },
        },
        {
          name: "Dry Fodder",
          nutrition: {
            Protein: 14,
            Fats: 4,
            Carbohydrates: 38,
            Fiber: 32,
            Minerals: 12,
          },
        },
        {
          name: "Oil Cakes",
          nutrition: {
            Protein: 25,
            Fats: 10,
            Carbohydrates: 30,
            Fiber: 20,
            Minerals: 15,
          },
        },
      ],
    },
    dietManagement: {
      dailyRation: "30 kg/day (green + dry fodder)",
      specialDiet: "Extra minerals for pregnant buffaloes",
    },
    costManagement: {
      feedPurchaseCost: "$180/month",
      dailyMonthlyExpenses: "Approx. $6/day or $180/month",
    },
    analytics: {
      costVsYieldAnalysis: "Feed-to-milk conversion: 1.1 liters per kg of feed",
    },
    seasonalClimateImpact:
      "Buffaloes show reduced appetite during winter, impacting milk yield",
  },
};
