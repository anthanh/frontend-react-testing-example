import config from "../../config/config.json";
import axios from "axios";

export function validateIbanChecksum(iban: string) {
  return axios
    .get(`${config.apiBaseUrl}iban/${iban}`)
    .then(response => response.data.valid);
}
