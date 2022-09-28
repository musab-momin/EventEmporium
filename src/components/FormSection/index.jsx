import React, { useState, useCallback } from "react";
import { sendEmail, validate } from "../../misc/helper";
import Alert from "./Alert";
import CustomForm from "./CustomForm";
import FormDetails from "./FormDetails";
import "./styles.css";

const FormSection = () => {
  const [frmValues, setFrmValues] = useState({
    name: "",
    email: "",
    contact: "",
    type: "Type of Event",
    date: "",
    requirements: "",
  });

  const [validations, setValidations] = useState({});
  const [toast, setToast] = useState({ active: false, type: "", mssg: "" });
  const [loading, setLoading] = useState(false);

  const onInputChange = useCallback((eve) => {
    const { name, value } = eve.target;
    setFrmValues((prev) => {
      return { ...prev, [name]: value };
    });
  }, []);


  const resetAlert = useCallback(() => {
    setToast({ active: false, type: "", mssg: "" });
  }, []);

  const handleSubmit = useCallback(
    (eve) => {
      eve.preventDefault();
      const errors = validate(frmValues);
      setValidations(errors);
      if (Object.keys(errors).length === 0) {
        setLoading(true);
        sendEmail(frmValues).then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            setFrmValues({
              name: "",
              email: "",
              contact: "",
              type: "Type of Event",
              date: "",
              requirements: "",
            });
            setToast({
              active: true,
              type: "toast-success",
              mssg: "Email has been sent!",
            });
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
            setFrmValues({
              name: "",
              email: "",
              contact: "",
              type: "Type of Event",
              date: "",
              requirements: "",
            });
            setToast({
              active: true,
              type: "toast-error",
              mssg: "Something went woring!",
            });
          }
        );
      }
    },
    [frmValues]
  );

  return (
    <section className="common-sec" id="quote">
      <div className="frm-container">
        {toast.active && (
          <Alert {...toast} resetAlert={resetAlert} setToast={setToast} />
        )}
        <FormDetails />
        <CustomForm
          frmValues={frmValues}
          onInputChange={onInputChange}
          handleSubmit={handleSubmit}
          validations={validations}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default FormSection;
