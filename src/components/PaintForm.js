import React from "react";

function PaintForm({ isEditing, formik, setIsEditing }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      <h1>Add paint</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="first_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
          aria-describedby="emailHelp"
        />
        {formik.touched.first_name && formik.errors.first_name ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.first_name}
          </div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          name="last_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
        />
        {formik.touched.last_name && formik.errors.last_name ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.last_name}
          </div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Email
        </label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.email}
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
