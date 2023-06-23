import Footer from "../components/FooterPage";
import React from "react";
import { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import { RenderSteps } from "../components/RenderSteps";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { getYachtPaint, saveYachtData } from "../service/yachtService";

export const PaintFinder = () => {
  let navigate = useNavigate();
  const { user } = useAuth0();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLengthFormValid, setIsLengthFormValid] = useState(false);
  const [isDraftFormValid, setIsDraftFormValid] = useState(false);
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
      const paintData = await getYachtPaint(selectedOptions);
      setPaintData(paintData);
    } catch (error) {
      console.error("Error retrieving paint data:", error);
    }
  };

  const savePaintData = async () => {
    const updatedSelectedOptions = {
      selectedType: selectedType,
      selectedMaterial: selectedMaterial,
      season: season,
      selectedSpeed: selectedSpeed,
      budget: budget,
    };
    const selectedPaint = paintData[0]; // İlk boya verisini al, isteğe bağlı olarak farklı bir kriterle seçim yapabilirsin
    if (selectedPaint) {
      try {
        await saveYachtData(
          user,
          boatName,
          boatLength,
          boatDraft,
          selectedPaint,
          updatedSelectedOptions
        );
        // Clear the form fields
        setBoatName("");
        setBoatLength(0);
        setBoatDraft(0);
        setSelectedType("");
        setSelectedMaterial("");
        setSeason("");
        setSelectedSpeed("");
        setBudget("");
        setSelectedOptions(updatedSelectedOptions);

        navigate("/profile");
        // Paint data retrieval after saving (if needed)
        // getPaintData(updatedSelectedOptions);
      } catch (error) {
        console.error("Error saving paint data:", error);
      }
    } else {
      Swal.fire("Error", "No paint data available.", "error");
    }
  };

  const handleSaveData = () => {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to save this data? You cannot modify these data once saved.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, save it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedPaint = paintData[0]; // İlk boya verisini al, isteğe bağlı olarak farklı bir kriterle seçim yapabilirsin
        if (selectedPaint) {
          savePaintData();
          Swal.fire("Saved!", "Data has been saved.", "success");
        } else {
          Swal.fire("Error", "No paint data available.", "error");
        }
      }
    });
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

    getPaintData(updatedSelectedOptions);
    handleNext();
    setSelectedOptions(updatedSelectedOptions);
  };

  // Render paint data
  const renderPaintData = () => {
    if (!paintData || paintData.length === 0) {
      return <p>No paint data available.</p>;
    }
    return paintData.map((paint, index) => {
      if (!paint || typeof paint.brand === "undefined") {
        return null; // veya hata durumuna uygun bir işlem yapabilirsiniz
      }
      return (
        <div key={index}>
          <h3>Yacht Name : {paint.brand} </h3>
          <p>Paint Name: {paint.paintName}</p>
          <p>Paint Image:</p>
          <img src={`http://localhost:9000/paints/${paint.id}/image`} />
        </div>
      );
    });
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
    if (isFormValid) {
      setStep(step + 1);
    } else {
      // Form.Control alanına veri girilmediğinde yapılacak işlemler
      // Örneğin, kullanıcıyı uyarabilir veya bir hata mesajı gösterebilirsiniz
      Swal.fire(
        "Error",
        "Please enter name of your yacht in the form field.",
        "error"
      );
    }
  };

  const handleNextDimension = () => {
    if (isLengthFormValid && isDraftFormValid) {
      setStep(step + 1);
    } else {
      // Form.Control alanlarına geçerli değerler girilmediğinde yapılacak işlemler
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter positive numbers.",
      });
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleBoatNameChange = (e) => {
    const inputValue = e.target.value;
    // İstenilen koşulu kontrol et
    const isValid = inputValue !== ""; // Form.Control alanına değer girilip girilmediğini kontrol et

    // Durumu güncelle
    setIsFormValid(isValid);
    setBoatName(inputValue);
  };

  const handleBoatLengthChange = (e) => {
    const inputValue = e.target.value;
    // İstenilen koşulu kontrol et
    const isValid = inputValue > 0; // 0'dan büyük pozitif değer kontrolü

    // Durumu güncelle
    setIsLengthFormValid(isValid);
    setBoatLength(inputValue);
  };

  const handleBoatDraftChange = (e) => {
    const inputValue = e.target.value;
    // İstenilen koşulu kontrol et
    const isValid = inputValue > 0; // 0'dan büyük pozitif değer kontrolü

    // Durumu güncelle
    setIsDraftFormValid(isValid);
    setBoatDraft(inputValue);
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
    <div style={{ paddingTop: "20px", textAlign: "center", margin: "20px" }}>
      <Container>
        <RenderSteps
          handleNext={handleNext}
          handleNextDimension={handleNextDimension}
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
          handleSaveData={handleSaveData}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default PaintFinder;
