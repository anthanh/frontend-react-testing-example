import React, { Component, SyntheticEvent, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { validateIbanFormat } from "../../helpers/payment.helpers";
import { validateIbanChecksum } from "../../services/payments.service";
import { CircularProgress } from "@material-ui/core";
import { AppStore } from "../../../store/store";
import { setLoading, setIban, setValid } from "../../store/payments.actions";
import { connect } from "react-redux";
import { PaymentsStore } from "../../store/payments.store";

interface IbanInputProps extends PaymentsStore {
  setIban: Function;
  setValid: Function;
  setLoading: Function;
}

class IbanInput extends Component<IbanInputProps> {
  constructor(props: IbanInputProps) {
    super(props);
  }

  setValue = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    this.props.setIban(value)
    this.props.setValid(validateIbanFormat(event.target.value))
  };

  render() {
    return (
      <div>
        <label htmlFor="iban">IBAN</label>
        {this.props.loading && <CircularProgress />}
        <TextField
          id="iban"
          placeholder="ES12 1234 1234 1234 1234"
          onChange={this.setValue}
          value={this.props.iban}
        />
        <p className="iban-value">{this.props.iban}</p>
        <p className="iban-valid">{JSON.stringify(this.props.valid)}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => {
  return {
    ...state.payment
  };
};

const mapDispatchToProps = { setLoading, setIban, setValid };

export default connect(mapStateToProps, mapDispatchToProps)(IbanInput);
// export default IbanInput;
