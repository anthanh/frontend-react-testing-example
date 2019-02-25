import { validateIbanFormat } from "./payment.helpers";


describe("Pyament helpers", () => {
  it("returns false if no value", () => {
    expect(validateIbanFormat("")).toBe(false);
  });

  it("'DE89 3704 0044 0532 0130 00', // ok", () => {
    expect(validateIbanFormat("DE89 3704 0044 0532 0130 00")).toBe(true);
  });

  it("'AT61 1904 3002 3457 3201', // ok", () => {
    expect(validateIbanFormat("AT61 1904 3002 3457 3201")).toBe(true);
  });

  it("'FR14 2004 1010 0505 0001 3', // smells ok but wrong checksum", () => {
    expect(validateIbanFormat("FR14 2004 1010 0505 0001 3")).toBe(true);
  });

  it("'GB82-WEST-1234-5698-7654-32', // ok", () => {
    expect(validateIbanFormat("GB82-WEST-1234-5698-7654-32")).toBe(true);
  });

  it("'NL20INGB0001234567', // ok", () => {
    expect(validateIbanFormat("NL20INGB0001234567")).toBe(true);
  });

  it("'XX00 1234 5678 9012 3456 7890 1234 5678 90', // smells ok", () => {
    expect(validateIbanFormat("XX00 1234 5678 9012 3456 7890 1234 5678 90")).toBe(
      true
    );
  });

  it("'YY00123456789012345678901234567890', // smells ok", () => {
    expect(validateIbanFormat("YY00123456789012345678901234567890")).toBe(true);
  });

  it("'NL20-ING-B0-00-12-34-567', // wrong format, but valid checksum", () => {
    expect(validateIbanFormat("NL20-ING-B0-00-12-34-567")).toBe(false);
  });

  it("'XX22YYY1234567890123', // smells ok but wrong checksum", () => {
    expect(validateIbanFormat("XX22YYY1234567890123")).toBe(true);
  });

  it("'foo@i.ban' // Not even smells like IBAN", () => {
    expect(validateIbanFormat("foo@i.ban")).toBe(false);
  });
});
