import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { validateIbanChecksum } from "./payments.service";
import config from '../../config/config.json'

describe("Payments service", () => {
  const mock = new MockAdapter(axios);

  afterAll(() => {
    mock.restore();
  });

  it("calls to endpoint as expected", () => {
    mock.onGet(/\/iban\/*/).reply(() => {
      return [200, { valid: false }];
    });

    jest.spyOn(axios, 'get')

    validateIbanChecksum('customvalue')

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(`${config.apiBaseUrl}iban/customvalue`)
  });
});
