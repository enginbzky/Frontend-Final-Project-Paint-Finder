///service file is a file where we make http requests to the server.
//this way of abstraction is arguably better than writing these functions in your components

const BASE_URL = "http://localhost:5000/api/v1/User";

//getting all paints
export const getPaints = async () => {
  try {
    const response = await fetch(BASE_URL);
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
  const options = {
    method: "POST",
    body: JSON.stringify(paint),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(BASE_URL, options);
  const json = await response.json();
  if (response.ok) {
    return json; /// <=== return the fetched json data
  } else {
    throw new Error(response.statusText);
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
    const response = await fetch(`${BASE_URL}/${id}`, options);
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
    const response = await fetch(`${BASE_URL}/${id}`, {
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
