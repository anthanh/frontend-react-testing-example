function validateIbanChecksum(iban) {
  const ibanStripped = iban
    .replace(/[^A-Z0-9]+/gi, "") // keep numbers and letters only
    .toUpperCase(); // calculation expects upper-case
  const m = ibanStripped.match(/^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/);
  if (!m) return false;

  const numbericed = (m[3] + m[1] + m[2]).replace(/[A-Z]/g, ch => {
    // replace upper-case characters by numbers 10 to 35
    return ch.charCodeAt(0) - 55;
  });
  // The resulting number would be to long for javascript to handle without loosing precision.
  // So the trick is to chop the string up in smaller parts.
  const mod97 = numbericed.match(/\d{1,7}/g).reduce((total, curr) => {
    return Number(total + curr) % 97;
  }, "");

  return mod97 === 1;
}

const IbanController = {
  validateIbanChecksum: (req, res) => {
    const delay = Math.floor((Math.random() * 500) + 100)
    console.log("validateIbanChecksum: ", req.params.iban, delay);
    setTimeout(() => {
      res.status(200).send({
        valid:
          req &&
          req.params &&
          req.params.iban &&
          validateIbanChecksum(req.params.iban)
      });
    }, delay)
  }
};

module.exports = IbanController;
