export interface PaymentsStore {
  iban: string;
  valid: boolean;
  loading: boolean;
}

export const paymentInitialState: PaymentsStore = {
  iban: "",
  valid: false,
  loading: false
};
