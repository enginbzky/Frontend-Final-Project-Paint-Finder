import React from "react";

function PaintForm({ isEditing, formik, setIsEditing }) {
  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("image", file);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
      style={{ width: 400 }}
    >
      <h1>Add paint</h1>
      <div className="mb-3" style={{ width: 400 }}>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Brand
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="brand"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
          aria-describedby="emailHelp"
        />
        {formik.touched.brand && formik.errors.brand ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.brand}
          </div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Type
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.type}
          aria-describedby="emailHelp"
        />
        {formik.touched.type && formik.errors.type ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.type}
          </div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Paint Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          name="paintName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.paintName}
        />
        {formik.touched.paintName && formik.errors.paintName ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.paintName}
          </div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Material
        </label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          name="material"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.material}
        />

        {formik.touched.material && formik.errors.material ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.material}
          </div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Season
        </label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          name="season"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.season}
        />

        {formik.touched.season && formik.errors.season ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.season}
          </div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Budget
        </label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          name="budget"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.budget}
        />

        {formik.touched.budget && formik.errors.budget ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.budget}
          </div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Description
        </label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          name="description"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />

        {formik.touched.description && formik.errors.description ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.description}
          </div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Maximum Speed
        </label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          name="maxSpeed"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.maxSpeed}
        />

        {formik.touched.maxSpeed && formik.errors.maxSpeed ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.maxSpeed}
          </div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          File
        </label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          name="image"
          type="file"
          onChange={handleImageChange}
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.image}
          </div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-success">
        {!isEditing ? "submit" : "update"}
      </button>
      {isEditing && (
        <button
          type="button"
          onClick={() => {
            setIsEditing(false);
            formik.resetForm();
          }}
          className="btn btn-danger"
        >
          cancel
        </button>
      )}
    </form>
  );
}
export default PaintForm;
