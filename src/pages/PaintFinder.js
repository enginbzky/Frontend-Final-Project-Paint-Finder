import Footer from "../components/FooterPage";
import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { RenderSteps } from "../components/RenderSteps";

export const PaintFinder = () => {
  const [step, setStep] = useState(1);
  const [boatName, setBoatName] = useState("");
  const [boatLength, setBoatLength] = useState(0);
  const [boatDraft, setBoatDraft] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [season, setSeason] = useState("");
  const [selectedSpeed, setSelectedSpeed] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    selectedType: "",
    selectedMaterial: "",
    season: "",
    selectedSpeed: "",
    budget: "",
  });
  const [paintData, setPaintData] = useState([]);

  useEffect(() => {
    if (
      selectedOptions.selectedType &&
      selectedOptions.selectedMaterial &&
      selectedOptions.season &&
      selectedOptions.selectedSpeed &&
      selectedOptions.budget
    ) {
      getPaintData();
    }
  }, [selectedOptions]);

  const getPaintData = async () => {
    try {
      const queryParams = new URLSearchParams(selectedOptions);
      const response = await fetch(
        `http://localhost:9000/paints?${queryParams.toString()}`
      );
      console.log("Selected Options:", selectedOptions);
      if (!response.ok) {
        throw new Error("Paint data retrieval failed");
      }
      const data = await response.json();
      console.log("Received paint data:", data);
      setPaintData(data);
    } catch (error) {
      console.error("Error retrieving paint data:", error);
    }
  };

  const handleComplete = () => {
    // Create an object with the selected options
    const updatedSelectedOptions = {
      selectedType: selectedType,
      selectedMaterial: selectedMaterial,
      season: season,
      selectedSpeed: selectedSpeed,
      budget: budget,
    };
    setSelectedOptions(updatedSelectedOptions);
    getPaintData(updatedSelectedOptions);
    handleNext();
  };

  // Render paint data
  const renderPaintData = () => {
    return paintData.map((paint, index) => (
      <div key={index}>
        <h3>Yacht Name : {paint.brand} </h3>
        <p>Paint Name: {paint.paintName}</p>
      </div>
    ));
  };

  const userChoices = () => {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Boat Name</th>
              <th>Boat Length</th>
              <th>Boat Draft</th>
              <th>Selected Type</th>
              <th>Selected Material</th>
              <th>Season</th>
              <th>Selected Speed</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{boatName}</td>
              <td>{boatLength}</td>
              <td>{boatDraft}</td>
              <td>{selectedType}</td>
              <td>{selectedMaterial}</td>
              <td>{season}</td>
              <td>{selectedSpeed}</td>
              <td>{budget}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleBoatNameChange = (e) => {
    setBoatName(e.target.value);
  };

  const handleBoatLengthChange = (e) => {
    setBoatLength(e.target.value);
  };

  const handleBoatDraftChange = (e) => {
    setBoatDraft(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleMaterialChange = (e) => {
    setSelectedMaterial(e.target.value);
  };

  const handleSeason = (e) => {
    setSeason(e.target.value);
  };

  const handleSpeedChange = (e) => {
    setSelectedSpeed(e.target.value);
  };
  const handleBudget = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div
      className="App"
      style={{ paddingTop: "20px", textAlign: "center", margin: "100px" }}
    >
      <RenderSteps
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleBoatNameChange={handleBoatNameChange}
        handleBoatDraftChange={handleBoatDraftChange}
        handleBoatLengthChange={handleBoatLengthChange}
        handleTypeChange={handleTypeChange}
        handleSpeedChange={handleSpeedChange}
        handleBudget={handleBudget}
        handleComplete={handleComplete}
        handleMaterialChange={handleMaterialChange}
        handleSeason={handleSeason}
        step={step}
        boatName={boatName}
        selectedType={selectedType}
        selectedMaterial={selectedMaterial}
        selectedSpeed={selectedSpeed}
        boatLength={boatLength}
        boatDraft={boatDraft}
        season={season}
        budget={budget}
        renderPaintData={renderPaintData}
        userChoices={userChoices}
      />
    </div>
  );
};

export default PaintFinder;
