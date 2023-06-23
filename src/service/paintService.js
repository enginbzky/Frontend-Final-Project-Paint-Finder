const BASE_URL = "http://localhost:9000";

export const getPaints = async () => {
  try {
    const response = await fetch(`${BASE_URL}/paints`);
    const json = await response.json();
    if (response.ok) {
      const paints = json.map((paint) => {
        return {
          ...paint,
          image: `${BASE_URL}/paints/${paint.id}/image`,
        };
      });
      return paints;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
};

///create a new paint
export const createPaint = async (paint) => {
  const formData = new FormData();
  formData.append("paintImage", paint.image);

  const jsonData = {
    paintName: paint.paintName,
    type: paint.type,
    brand: paint.brand,
    material: paint.material,
    season: paint.season,
    budget: paint.budget,
    description: paint.description,
    maxSpeed: paint.maxSpeed,
  };

  formData.append("paint", JSON.stringify(jsonData));

  console.log(formData.get("Image"));
  console.log(formData.get("paint"));

  const options = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(`${BASE_URL}/paints`, options);
    const json = await response.json();

    if (response.ok) {
      return json;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePaint = async (id, paint) => {
  const formData = new FormData();
  formData.append("paintImage", paint.image);

  const jsonData = {
    paintName: paint.paintName,
    type: paint.type,
    brand: paint.brand,
    material: paint.material,
    season: paint.season,
    budget: paint.budget,
    description: paint.description,
    maxSpeed: paint.maxSpeed,
  };

  formData.append("paint", JSON.stringify(jsonData));

  const options = {
    method: "PUT",
    body: formData,
  };

  try {
    const response = await fetch(`${BASE_URL}/paints/degis/${id}`, options);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
};

///delete an existing paint
export const deletePaint = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/paints/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
};
