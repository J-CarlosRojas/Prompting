import React, { useState } from "react";
import Selector from "./components/Selector";
import PromptViewer from "./components/PromptViewer";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    updatePrompt(selectedGender, age, hairColor);
  };

  const handleAgeChange = (e) => {
    const inputAge = e.target.value;
    if (inputAge === "" || Number(inputAge) >= 18) {
      setAge(inputAge);
      updatePrompt(gender, inputAge, hairColor);
    }
  };

  const handleHairColorChange = (e) => {
    const selectedHairColor = e.target.value;
    setHairColor(selectedHairColor);
    updatePrompt(gender, age, selectedHairColor);
  };

  const updatePrompt = (selectedGender, selectedAge, selectedHairColor) => {
    const basePrompt = "Epic realistic, hyper-detailed";
    const genderPrompt = selectedGender
      ? selectedGender === "male"
        ? "1 man"
        : "1 woman"
      : "";
    const agePrompt = selectedAge ? `age ${selectedAge}` : "";
    const hairColorPrompt = selectedHairColor
      ? `${selectedHairColor} hair`
      : "";
    setPrompt(
      `${basePrompt}, ${genderPrompt}, ${agePrompt}, ${hairColorPrompt}`.trim()
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Prompting Tool</h1>
      {/* Selector de género */}
      <Selector
        label="Select Gender"
        options={[
          { label: "Man", value: "male" },
          { label: "Woman", value: "female" },
        ]}
        value={gender}
        onChange={handleGenderChange}
      />
      {/* Input de edad */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="age" style={{ marginRight: "10px" }}>
          Enter Age (18+):
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={handleAgeChange}
          min="18"
          placeholder="18 or more"
          style={{ padding: "5px", fontSize: "16px" }}
        />
      </div>
      {/* Selector de color de cabello */}
      <Selector
        label="Select Hair Color"
        options={[
          { label: "Black", value: "black" },
          { label: "Brown", value: "brown" },
          { label: "Blonde", value: "blonde" },
          { label: "Red", value: "red" },
          { label: "Gray", value: "gray" },
          { label: "White", value: "white" },
        ]}
        value={hairColor}
        onChange={handleHairColorChange}
      />
      {/* Visualizador de prompts */}
      <PromptViewer prompt={prompt} />
    </div>
  );
};

export default App;
