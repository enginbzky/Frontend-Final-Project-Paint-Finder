import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { createPaint, getPaints, updatePaint } from "../service/paintService";

import PaintForm from "../components/PaintForm";
import PaintTable from "../components/PaintTable";
import { alertWithMessage } from "../AlertWithMessage";

export const PaintFinder = () => {
  const [paints, setPaints] = useState([]); //used to store the data received from the API request
  const [error, setError] = useState(null); //is used to store any errors that occur during the API request
  const [loading, setLoading] = useState(true); // is used to indicate whether the data is currently being loaded from the API request
  const [isEditing, setIsEditing] = useState(false); //will be set to true when you click on the edit icon
  const [paintId, setPaintId] = useState(null); ///id of user that will be updated
  //this fetches the data when the page loads
  useEffect(() => {
    try {
      setLoading(true);
      getData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // getData makes an HTTP get request to the Hicoders-API to get all existing paints
  const getData = async () => {
    try {
      const paints = await getPaints();
      setPaints(paints);
    } catch (error) {
      setError(error);
    }
  };
  ///when the user clicks on the edit icon, this function will be called
  const handleEdit = (pPaint) => {
    setIsEditing(true);
    setPaintId(pPaint.id);
    formik.setValues({
      first_name: pPaint.first_name,
      last_name: pPaint.last_name,
      email: pPaint.email,
    });
  };
  const handlePaintUpdate = async (pValues) => {
    const paint = {
      first_name: pValues.first_name,
      last_name: pValues.last_name,
      email: pValues.email,
    };
    try {
      await updatePaint(paintId, paint);
      getData();
      alertWithMessage("Paint edited successfully");
    } catch (error) {
      setError(error);
    }
    setIsEditing(false);
  };

  const handleSubmit = async (pValues) => {
    const newPaint = {
      first_name: pValues.first_name,
      last_name: pValues.last_name,
      email: pValues.email,
    };
    try {
      await createPaint(newPaint);
      alertWithMessage("Paint added successfully.");
      getData();
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(15, "First name must be 15 characters or less")
        .required("Required"),
      last_name: Yup.string()
        .max(15, "Last name must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!isEditing) {
        handleSubmit(values);
      } else {
        handlePaintUpdate(values);
      }
      resetForm();
    },
  });

  ///loading screen
  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  ////show error
  if (error)
    return <p style={{ color: "white" }}>An error occurred: {error.message}</p>;

  return (
    <div className="App m-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 text-start ">
            <PaintForm
              isEditing={isEditing}
              formik={formik}
              setIsEditing={setIsEditing}
            />
          </div>
          <div className="col-lg-7  col-12">
            <PaintTable
              paints={paints}
              getData={getData}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
