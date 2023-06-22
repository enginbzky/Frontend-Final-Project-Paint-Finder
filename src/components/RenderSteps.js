import { Button, Row, Col, Form } from "react-bootstrap";

export const RenderSteps = ({
  handleNext,
  handleNextDimension,
  handlePrev,
  handleBoatNameChange,
  handleBoatDraftChange,
  handleBoatLengthChange,
  handleTypeChange,
  handleSpeedChange,
  handleBudget,
  handleComplete,
  handleMaterialChange,
  handleSeason,
  handleSaveData,
  step,
  boatName,
  selectedType,
  selectedMaterial,
  selectedSpeed,
  boatLength,
  boatDraft,
  season,
  budget,
  renderPaintData,
  userChoices,
}) => {
  switch (step) {
    case 1:
      return (
        <div>
          <Form.Group controlId="boatName">
            <Form.Label>
              <h1 style={{ color: "#0869fb" }}>
                What is the name of the Yacht?
              </h1>
            </Form.Label>
            <Form.Control
              style={{ width: "300px", margin: "auto" }}
              type="text"
              value={boatName}
              onChange={handleBoatNameChange}
            />
          </Form.Group>
          <br />
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handleNext}
              >
                Next
              </Button>
            </Col>
          </Row>
        </div>
      );
    case 2:
      return (
        <div>
          <Form.Group controlId="selectedType">
            <Form.Label>
              <h1 style={{ color: "#0869fb", paddingBottom: "80px" }}>
                What is the type of the Yacht?
              </h1>
            </Form.Label>
            <Row>
              <Col>
                <Form.Check.Label htmlFor="type1">
                  <h3 style={{ color: "#0869fb" }}>Motor Yacht</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="types"
                  value="Motor Yacht"
                  checked={selectedType === "Motor Yacht"}
                  onChange={handleTypeChange}
                  className="custom-radio"
                  id="type1"
                />
              </Col>
              <Col>
                <Form.Check.Label htmlFor="type2">
                  <h3 style={{ color: "#0869fb" }}>Sailing</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="types"
                  value="Sailing"
                  checked={selectedType === "Sailing"}
                  onChange={handleTypeChange}
                  className="custom-radio"
                  id="type2"
                />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Row className="justify-content-between">
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handlePrev}
              >
                Previous
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handleNext}
                disabled={!selectedType}
              >
                Next
              </Button>
            </Col>
          </Row>
        </div>
      );
    case 3:
      return (
        <div>
          <Form.Group controlId="selectedMaterial">
            <Form.Label>
              <h1 style={{ color: "#0869fb", paddingBottom: "80px" }}>
                What is the material of the Yacht?
              </h1>
            </Form.Label>
            <Row>
              <Col>
                <Form.Check.Label htmlFor="steel">
                  <h3 style={{ color: "#0869fb" }}>Steel</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="materials"
                  value="Steel"
                  checked={selectedMaterial === "Steel"}
                  onChange={handleMaterialChange}
                  className="custom-radio"
                  id="steel"
                />
              </Col>
              <Col>
                <Form.Check.Label htmlFor="fiber">
                  <h3 style={{ color: "#0869fb" }}>Fiber</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="materials"
                  value="Fiber"
                  checked={selectedMaterial === "Fiber"}
                  onChange={handleMaterialChange}
                  className="custom-radio"
                  id="fiber"
                />
              </Col>
              <Col>
                <Form.Check.Label htmlFor="wood">
                  <h3 style={{ color: "#0869fb" }}>Wood</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="materials"
                  value="Wood"
                  checked={selectedMaterial === "Wood"}
                  onChange={handleMaterialChange}
                  className="custom-radio"
                  id="wood"
                />
              </Col>
              <Col>
                <Form.Check.Label htmlFor="aluminum">
                  <h3 style={{ color: "#0869fb" }}>Aluminum</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="materials"
                  value="Aluminum"
                  checked={selectedMaterial === "Aluminum"}
                  onChange={handleMaterialChange}
                  className="custom-radio"
                  id="aliminum"
                />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Row className="justify-content-between">
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handlePrev}
              >
                Previous
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handleNext}
                disabled={!selectedMaterial}
              >
                Next
              </Button>
            </Col>
          </Row>
        </div>
      );
    case 4:
      return (
        <div>
          <Form.Group controlId="selectedSpeed">
            <Form.Label>
              <h1 style={{ color: "#0869fb", paddingBottom: "80px" }}>
                What is the max. speed of the Yacht?
              </h1>
            </Form.Label>
            <Row>
              <Col>
                <Form.Check.Label htmlFor="under25">
                  <h3 style={{ color: "#0869fb" }}>Under 25 knot/h</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="speed"
                  value="Under 25"
                  checked={selectedSpeed === "Under 25"}
                  onChange={handleSpeedChange}
                  className="custom-radio"
                  id="under25"
                />
              </Col>
              <Col>
                <Form.Check.Label htmlFor="over25">
                  <h3 style={{ color: "#0869fb" }}>Over 25 knot/h</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="speed"
                  value="Over 25"
                  checked={selectedSpeed === "Over 25"}
                  onChange={handleSpeedChange}
                  className="custom-radio"
                  id="over25"
                />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Row className="justify-content-between">
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handlePrev}
              >
                Previous
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handleNext}
                disabled={!selectedSpeed}
              >
                Next
              </Button>
            </Col>
          </Row>
        </div>
      );
    case 5:
      return (
        <div>
          <Form.Group controlId="boatSize">
            <Form.Label>
              <h1 style={{ color: "#0869fb", paddingBottom: "80px" }}>
                What is the dimensions of the Yacht?
              </h1>
            </Form.Label>
            <Row>
              <Col>
                <Form.Check.Label htmlFor="under25">
                  <h3 style={{ color: "#0869fb" }}>
                    Water line length {"("} meter {")"}
                  </h3>
                </Form.Check.Label>
                <Form.Control
                  style={{ width: "300px", margin: "auto" }}
                  type="number"
                  value={boatLength}
                  onChange={handleBoatLengthChange}
                />
              </Col>
              <Col>
                <Form.Check.Label htmlFor="under25">
                  <h3 style={{ color: "#0869fb" }}>
                    Draft {"("} meter {")"}
                  </h3>
                </Form.Check.Label>
                <Form.Control
                  style={{ width: "300px", margin: "auto" }}
                  type="number"
                  value={boatDraft}
                  onChange={handleBoatDraftChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Row className="justify-content-between">
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handlePrev}
              >
                Previous
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handleNextDimension}
              >
                Next
              </Button>
            </Col>
          </Row>
        </div>
      );
    case 6:
      return (
        <div>
          <Form.Group controlId="season">
            <Form.Label>
              <h1 style={{ color: "#0869fb", paddingBottom: "80px" }}>
                Do you want a one-season or multi-season paint?
              </h1>
            </Form.Label>
            <Row>
              <Col>
                <Form.Check.Label htmlFor="one-season">
                  <h3 style={{ color: "#0869fb" }}>One-Season</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="season"
                  value="One-season"
                  checked={season === "One-season"}
                  onChange={handleSeason}
                  className="custom-radio"
                  id="one-season"
                />
              </Col>
              <Col>
                <Form.Check.Label htmlFor="multi-season">
                  <h3 style={{ color: "#0869fb" }}>Multi-season</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="season"
                  value="Multi-season"
                  checked={season === "Multi-season"}
                  onChange={handleSeason}
                  className="custom-radio"
                  id="multi-season"
                />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Row className="justify-content-between">
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handlePrev}
              >
                Previous
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handleNext}
                disabled={!season}
              >
                Next
              </Button>
            </Col>
          </Row>
        </div>
      );
    case 7:
      return (
        <div>
          <Form.Group controlId="budget">
            <Form.Label>
              <h1 style={{ color: "#0869fb", paddingBottom: "80px" }}>
                What is the budget for the Yacht?
              </h1>
            </Form.Label>
            <Row>
              <Col>
                <Form.Check.Label htmlFor="economic">
                  <h3 style={{ color: "#0869fb" }}>Economic</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="budget"
                  value="Economic"
                  checked={budget === "Economic"}
                  onChange={handleBudget}
                  className="custom-radio"
                  id="economic"
                />
              </Col>
              <Col>
                <Form.Check.Label htmlFor="exclusive">
                  <h3 style={{ color: "#0869fb" }}>Exculisive</h3>
                </Form.Check.Label>
                <Form.Check
                  type="radio"
                  name="budged"
                  value="Exclusive"
                  checked={budget === "Exclusive"}
                  onChange={handleBudget}
                  className="custom-radio"
                  id="exclusive"
                />
              </Col>
            </Row>
          </Form.Group>
          <br />
          <Row className="justify-content-between">
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handlePrev}
              >
                Previous
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handleComplete}
                disabled={!budget}
              >
                Complete
              </Button>
            </Col>
          </Row>
        </div>
      );
    case 8:
      return (
        <div>
          <Form.Group>
            <Form.Label>
              <h1 style={{ color: "#0869fb", paddingBottom: "80px" }}>
                Voila! Here is your paint
              </h1>
            </Form.Label>
            <Row>
              <Col>{renderPaintData()}</Col>
            </Row>
            <Row>
              <Col>{userChoices()}</Col>
            </Row>
          </Form.Group>
          <br />
          <Row className="justify-content-between">
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#EB6E14", color: "white" }}
                onClick={handlePrev}
              >
                Previous
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                style={{ backgroundColor: "#0869FB", color: "white" }}
                onClick={handleSaveData}
              >
                Save
              </Button>
            </Col>
          </Row>
        </div>
      );

    default:
      return null;
  }
};
