import React, { Component, SyntheticEvent, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { validateIbanFormat } from "../../helpers/payment.helpers";

interface IbanInputProps {
  value?: string;
  valid?: boolean;
}

class IbanInput extends Component<IbanInputProps, {}> {
  state: IbanInputProps;

  constructor(props: IbanInputProps) {
    super(props);
    this.state = {
      value: "",
      valid: true
    };
  }

  setValue = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value,
      valid: validateIbanFormat(event.target.value)
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="iban">IBAN</label>
        <TextField
          id="iban"
          placeholder="ES12 1234 1234 1234 1234"
          onChange={this.setValue}
          value={this.state.value}
        />
        <p className="iban-value">{this.state.value}</p>
        <p className="iban-valid">{JSON.stringify(this.state.valid)}</p>
      </div>
    );
  }
}

export default IbanInput;
