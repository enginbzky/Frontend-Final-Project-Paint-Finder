import { api } from "../service/httpService";

export async function getYachtPaint(selectedOptions) {
  try {
    const queryParams = new URLSearchParams(selectedOptions);
    const response = await fetch(
      `http://localhost:9000/selectedPaints?${queryParams.toString()}`
    );
    console.log("Selected Options:", selectedOptions);
    if (!response.ok) {
      throw new Error("Paint data retrieval failed");
    }
    const data = await response.json();
    console.log("Received paint data:", data);
    if (Array.isArray(data)) {
      return data;
    } else {
      return [data];
    }
  } catch (error) {
    console.error("Error retrieving paint data:", error);
    throw error;
  }
}

export async function saveYachtData(
  user,
  boatName,
  boatLength,
  boatDraft,
  selectedPaint,
  updatedSelectedOptions
) {
  try {
    await api.post(`/savePaintData?email=${user?.email}`, {
      boatName: boatName,
      boatLength: boatLength,
      boatDraft: boatDraft,
      brand: selectedPaint.brand,
      paintName: selectedPaint.paintName,
      ...updatedSelectedOptions,
    });
    // Diğer işlemler...
  } catch (error) {
    console.error("Error saving paint data:", error);
    throw error;
  }
}
