import emailjs from "@emailjs/browser";

export function sendEmail(frmValues) {
  const SERVICE_ID = "service_uu6rpq3";
  const TEMPLATE_ID = "template_c5u6gdy";
  const PUBLIC_KEY = "4e_gs6mt_tmg9cho2";

  const templateParams = {
    from_name: frmValues.name,
    to_name: "Event Emporium",
    message: `I want to organise a ${frmValues.type} event on this ${
      frmValues.date
    } date. 
                  ${
                    frmValues.requirements
                      ? "these are my special requirements " +
                        frmValues.requirements
                      : ""
                  }. 
                  If you are not clear you can contact me at ${
                    frmValues.email
                  } or ${frmValues.contact}.`,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}

export const validate = (frmData) => {
  const validations = {};

  // eslint-disable-next-line no-useless-escape
  const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validPhone = /^[0-9]*$/;

  if (!frmData.name) {
    validations.name = "Error: This is mendatory field";
  }
  if (frmData.type === "Type of Event") {
    validations.type = "Error: This is mendatory field";
  }
  if (!frmData.date) {
    validations.date = "Error: This is mendatory field";
  } else if (frmData.date) {
    // user entered date
    const date = frmData.date.toLocaleString();
    let [year, month, day] = date.split("-").map(item => parseInt(item))


    // current date
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    if (year < currentYear) {
      validations.date = "Error: This date is not valid";
    } else if (year === currentYear) {
      if (month < currentMonth) {
        validations.date = "Error: This date is not valid";
      }else if(month === currentMonth && day < currentDay){
        validations.date = "Error: This date is not valid";
      }
    } else if (year > currentYear + 1) {
      validations.date = `Error: Date above ${currentYear + 1} is not allowed`;
    }
  }

  if (!frmData.email) {
    validations.email = "Error: This is mendatory field";
  } else if (!validMail.test(frmData.email)) {
    validations.email = "Error: Email is not valid!";
  }

  if (!frmData.contact) {
    validations.contact = "Error: This is mendatory field";
  } else if (
    frmData.contact.length !== 10 ||
    !validPhone.test(frmData.contact)
  ) {
    validations.contact = "Error: Phone number is not valid!";
  }
  return validations;
};
