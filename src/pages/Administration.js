import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { createPaint, getPaints, updatePaint } from "../service/paintService";
import Footer from "../components/FooterPage";
import PaintForm from "../components/PaintForm";
import PaintTable from "../components/PaintTable";
import { alertWithMessage } from "../AlertWithMessage";
import UserManagement from "../components/UserManagement";
import "../App.css";

export const Administration = () => {
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
      brand: pPaint.brand,
      paintName: pPaint.paintName,
      material: pPaint.material,
      season: pPaint.season,
      budget: pPaint.budget,
      description: pPaint.description,
      maxSpeed: pPaint.maxSpeed,
    });
  };
  const handlePaintUpdate = async (pValues) => {
    const paint = {
      brand: pValues.brand,
      paintName: pValues.paintName,
      material: pValues.material,
      season: pValues.season,
      budget: pValues.budget,
      description: pValues.description,
      maxSpeed: pValues.maxSpeed,
    };
    try {
      await updatePaint(paintId, paint);
      await getData();
      alertWithMessage("Paint edited successfully");
    } catch (error) {
      setError(error);
    }
    setIsEditing(false);
  };

  const handleSubmit = async (pValues) => {
    const newPaint = {
      brand: pValues.brand,
      paintName: pValues.paintName,
      material: pValues.material,
      season: pValues.season,
      budget: pValues.budget,
      description: pValues.description,
      maxSpeed: pValues.maxSpeed,
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
      brand: "",
      paintName: "",
      material: "",
      season: "",
      budget: "",
      description: "",
      maxSpeed: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      brand: Yup.string()
        .max(15, "Brand name must be 15 characters or less")
        .required("Required"),
      paintName: Yup.string()
        .max(25, "Pain name must be 25 characters or less")
        .required("Required"),
      material: Yup.string()
        .max(25, "Material must be 25 characters or less")
        .required("Required"),
      season: Yup.string()
        .max(25, "Season must be 25 characters or less")
        .required("Required"),
      budget: Yup.string()
        .max(25, "Budget must be 25 characters or less")
        .required("Required"),
      description: Yup.string()
        .min(25, "Description must be 25 characters or more")
        .required("Required"),
      maxSpeed: Yup.string()
        .max(25, "Maximum speed must be 25 characters or more")
        .required("Required"),
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
    <div className="Administration App m-5 p-5">
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
      <UserManagement />
      <Footer />
    </div>
  );
};
