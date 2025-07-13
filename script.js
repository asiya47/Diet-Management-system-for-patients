function suggestPlan() {
    const disease = document.getElementById("diseaseSelect").value;
    let dietPlan = "";
    let exercisePlan = "";

    switch (disease) {
        case "diabetes":
            dietPlan = "Eat fiber-rich foods, whole grains, and lean proteins. Avoid sugary foods.";
            exercisePlan = "Engage in moderate cardio (e.g., brisk walking, cycling) for at least 30 minutes a day.";
            break;
        case "hypertension":
            dietPlan = "Reduce sodium intake, eat potassium-rich foods like bananas and spinach.";
            exercisePlan = "Try aerobic exercises like swimming and yoga for stress management.";
            break;
        case "obesity":
            dietPlan = "Follow a calorie-controlled diet rich in vegetables, proteins, and healthy fats.";
            exercisePlan = "Include strength training and HIIT workouts 3-4 times a week.";
            break;
        case "heart_disease":
            dietPlan = "Consume omega-3 rich foods, nuts, and leafy greens. Avoid trans fats.";
            exercisePlan = "Low-impact exercises like walking, cycling, and stretching.";
            break;
        case "arthritis":
            dietPlan = "Anti-inflammatory foods like fish, nuts, and berries. Limit processed foods.";
            exercisePlan = "Gentle joint-friendly exercises like swimming and water aerobics.";
            break;
        case "osteoporosis":
            dietPlan = "Calcium-rich foods, vitamin D sources, and protein-rich foods.";
            exercisePlan = "Weight-bearing exercises and resistance training with proper form.";
            break;
        case "chronic kidney disease":
            dietPlan = "Low-sodium, low-potassium diet. Monitor protein intake. Stay hydrated.";
            exercisePlan = "Light cardio and flexibility exercises as approved by your doctor.";
            break;
        case "PCOS":
            dietPlan = "Low-glycemic foods, lean proteins, and anti-inflammatory foods.";
            exercisePlan = "Regular cardio and strength training to help manage hormones.";
            break;
        case "PCOD":
            dietPlan = "Balance carbs and proteins, include fiber-rich foods, limit processed foods.";
            exercisePlan = "Combination of cardio and strength training, yoga for hormone balance.";
            break;
        case "hypothyroidism":
            dietPlan = "Iodine-rich foods, selenium sources, avoid goitrogenic foods when raw.";
            exercisePlan = "Low-impact cardio, strength training, and yoga for metabolism boost.";
            break;
        case "Astama":
            dietPlan = "Anti-inflammatory foods, vitamin C-rich foods, avoid known triggers.";
            exercisePlan = "Breathing exercises, swimming, and gradual cardio buildup.";
            break;
        case "depression":
            dietPlan = "Omega-3 rich foods, complex carbs, and foods rich in B vitamins.";
            exercisePlan = "Regular outdoor activities, yoga, and group exercise classes.";
            break;
        case "fatty liver disease":
            dietPlan = "Low-fat diet, avoid alcohol, increase fiber intake.";
            exercisePlan = "Regular moderate cardio and strength training.";
            break;
        case "anemia":
            dietPlan = "Iron-rich foods, vitamin C for absorption, avoid tea/coffee with meals.";
            exercisePlan = "Light to moderate exercise, focusing on what you can tolerate.";
            break;
        case "migraine":
            dietPlan = "Identify and avoid trigger foods, stay hydrated, eat regular meals.";
            exercisePlan = "Regular light exercise, avoid high-intensity during episodes.";
            break;
        case "COPD":
            dietPlan = "Small, frequent meals. High protein, low carb. Stay hydrated.";
            exercisePlan = "Breathing exercises, light cardio with proper guidance.";
            break;
        case "Insomnia":
            dietPlan = "Avoid caffeine, heavy meals before bed. Include sleep-promoting foods.";
            exercisePlan = "Regular morning exercise, relaxation techniques before bed.";
            break;
        case "osteoarthritis":
            dietPlan = "Anti-inflammatory foods, maintain healthy weight, adequate protein.";
            exercisePlan = "Low-impact exercises, water therapy, gentle stretching.";
            break;
        case "eczema":
            dietPlan = "Identify trigger foods, anti-inflammatory foods, omega-3 rich foods.";
            exercisePlan = "Light exercise, avoid overheating, swimming in clean water.";
            break;
        case "constipation":
            dietPlan = "High-fiber foods, plenty of water, probiotic-rich foods.";
            exercisePlan = "Regular walking, core exercises, yoga for digestion.";
            break;
        case "allergies":
            dietPlan = "Identify and avoid trigger foods, include anti-inflammatory foods.";
            exercisePlan = "Regular moderate exercise, preferably indoors during high pollen.";
            break;
        default:
            dietPlan = "Please select a disease to get a diet plan.";
            exercisePlan = "";
    }

    document.getElementById("planResult").innerHTML = `
        <h4>Recommended Diet Plan:</h4>
        <p>${dietPlan}</p>
        <h4>Suggested Exercise Plan:</h4>
        <p>${exercisePlan}</p>
    `;
}