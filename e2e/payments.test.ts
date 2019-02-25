import { Selector, RequestMock } from "testcafe";

fixture(`Payment suite without mocks`).page(`http://localhost:3000`);

test("test iban validation", async t => {
  await t
    .typeText("input", "random iban")
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector(".iban-valid").innerText)
    .eql("false")

    .selectText("input")
    .pressKey("delete")

    .typeText("input", "AT61 1904 3002 3457 3201")
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector(".iban-valid").innerText)
    .eql("true");
});

const validMock = RequestMock()
  .onRequestTo("http://localhost:8000/")
  .respond({ valid: true });

const invalidMock = RequestMock()
  .onRequestTo("http://localhost:8000/")
  .respond({ valid: true });

fixture(`Payment suite with mocks`).page(`http://localhost:3000`);

test("test iban validation", async t => {
  await t
    .addRequestHooks(validMock)
    .typeText("input", "AT61 1904 3002 3457 3201")
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector(".iban-valid").innerText)
    .eql("true")
    
    .selectText("input")
    .pressKey("delete")
    .removeRequestHooks(validMock)
    .addRequestHooks(invalidMock)

    .typeText("input", "AT61 1904 3002 3457 3201")
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector(".iban-valid").innerText)
    .eql("false");
});
