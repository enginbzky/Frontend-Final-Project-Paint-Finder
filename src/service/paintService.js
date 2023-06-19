///service file is a file where we make http requests to the server.
//this way of abstraction is arguably better than writing these functions in your components

// const BASE_URL = "http://localhost:9000/";

//getting all paints
export const getPaints = async () => {
  try {
    const response = await fetch("http://localhost:9000/paints");
    const json = await response.json();
    if (response.ok) {
      return json; /// <=== return the fetched json data
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

  console.log(formData.get("Image")); // Veriyi doğru bir şekilde eklediğini doğrula
  console.log(formData.get("paint"));

  const options = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch("http://localhost:9000/paints", options);
    const json = await response.json();

    if (response.ok) {
      return json; // Gönderilen JSON verisinin yanıtı
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
};

///update the existing paint
export const updatePaint = async (id, paint) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(paint), // data can be an object or a string
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(`http://localhost:9000/paints/${id}`, options);
    const json = await response.json();
    if (response.ok) {
      return json; /// <=== return the fetched json data
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
    const response = await fetch(`http://localhost:9000/paints/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      return json; /// <=== return the fetched json data (if response if ok you will get saying {message:"User Deleted"})
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
};
