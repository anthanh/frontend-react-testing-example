import React, { Component, SyntheticEvent, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";

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
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="iban">IBAN</label>
        <TextField
          id="iban"
          placeholder="ES12 1234 1234 1234"
          onChange={this.setValue}
          value={this.state.value}
        />
        <p className="iban-value">{this.state.value}</p>
      </div>
    );
  }
}

export default IbanInput;
