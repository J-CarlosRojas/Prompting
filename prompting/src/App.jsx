import React, { useState } from 'react';
import Selector from './components/Selector';
import PromptViewer from './components/PromptViewer';

function App() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [hairStyle, setHairStyle] = useState("");
  const [skinTone, setSkinTone] = useState("");
  const [clothingType, setClothingType] = useState("");
  const [accessories, setAccessories] = useState("");
  const [posture, setPosture] = useState("");
  const [expression, setExpression] = useState("");
  const [background, setBackground] = useState("");

  // Opciones de cada selector (sin cambios)
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];
  const ageOptions = [
    { value: "18-30", label: "18-30" },
    { value: "30-50", label: "30-50" }
  ];
  const hairColorOptions = [
    { value: "Black", label: "Black" },
    { value: "Blonde", label: "Blonde" }
  ];
  const hairStyleOptions = [
    { value: "Short", label: "Short" },
    { value: "Long", label: "Long" }
  ];
  const skinToneOptions = [
    { value: "Light", label: "Light" },
    { value: "Dark", label: "Dark" }
  ];
  const clothingTypeOptions = [
    { value: "Casual", label: "Casual" },
    { value: "Formal", label: "Formal" }
  ];
  const accessoriesOptions = [
    { value: "None", label: "None" },
    { value: "Glasses", label: "Glasses" }
  ];
  const postureOptions = [
    { value: "Standing", label: "Standing" },
    { value: "Sitting", label: "Sitting" }
  ];
  const expressionOptions = [
    { value: "Happy", label: "Happy" },
    { value: "Serious", label: "Serious" }
  ];
  const backgroundOptions = [
    { value: "City", label: "City" },
    { value: "Nature", label: "Nature" }
  ];

  // Función para generar el prompt
  const generatePrompt = () => {
    return `A ${gender} aged ${age}, with ${hairColor} ${hairStyle} hair, ${skinTone} skin tone, wearing ${clothingType} clothing, and ${accessories}. The person is ${posture} with a ${expression} expression, in a ${background} background.`;
  };

  return (
    <div>
      <h1>Prompt Generator</h1>

      {/* Usar Selector.jsx para cada categoría */}
      <Selector
        label="Gender"
        options={genderOptions}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <Selector
        label="Age"
        options={ageOptions}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Selector
        label="Hair Color"
        options={hairColorOptions}
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <Selector
        label="Hair Style"
        options={hairStyleOptions}
        value={hairStyle}
        onChange={(e) => setHairStyle(e.target.value)}
      />
      <Selector
        label="Skin Tone"
        options={skinToneOptions}
        value={skinTone}
        onChange={(e) => setSkinTone(e.target.value)}
      />
      <Selector
        label="Clothing Type"
        options={clothingTypeOptions}
        value={clothingType}
        onChange={(e) => setClothingType(e.target.value)}
      />
      <Selector
        label="Accessories"
        options={accessoriesOptions}
        value={accessories}
        onChange={(e) => setAccessories(e.target.value)}
      />
      <Selector
        label="Posture"
        options={postureOptions}
        value={posture}
        onChange={(e) => setPosture(e.target.value)}
      />
      <Selector
        label="Expression"
        options={expressionOptions}
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <Selector
        label="Background"
        options={backgroundOptions}
        value={background}
        onChange={(e) => setBackground(e.target.value)}
      />

      {/* Usamos PromptViewer para mostrar el prompt generado */}
      <PromptViewer prompt={generatePrompt()} />
    </div>
  );
}

export default App;
