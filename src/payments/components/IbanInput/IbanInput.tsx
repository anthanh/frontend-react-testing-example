import React from "react";
import TextField from "@material-ui/core/TextField";

const IbanInput = () => (
  <div>
    <label htmlFor="iban">IBAN</label>
    <TextField id="iban" placeholder="ES12 1234 1234 1234" />
  </div>
);

export default IbanInput;
