import React, { Component, SyntheticEvent, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { validateIbanFormat } from "../../helpers/payment.helpers";
import { validateIbanChecksum } from "../../services/payments.service";
import { CircularProgress } from "@material-ui/core";

interface IbanInputProps {
  value?: string;
  valid?: boolean;
  loading?: boolean;
}

class IbanInput extends Component<IbanInputProps> {
  state: IbanInputProps;

  constructor(props: IbanInputProps) {
    super(props);
    this.state = {
      value: "",
      valid: true,
      loading: false
    };
  }

  setValue = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    this.setState({
      value: value,
      valid: validateIbanFormat(event.target.value)
    });

    this.setState({
      loading: true
    });
    const valid = await validateIbanChecksum(value);
    this.setState({
      value: value,
      valid: valid,
      loading: false
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="iban">IBAN</label>
        {this.state.loading && <CircularProgress />}
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
