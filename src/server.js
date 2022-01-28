const stripe = require("stripe")(
  "pk_test_51KMkEABrSUNo10EJSwwopkX597MvfZV4Nj8ZMdCZ0PkdE7X2P99PTIEptVP7vqHVJRZbBZsjVG8LCTUsjVI0xqZO00CzWvtaPJ"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1KMkwUBrSUNo10EJZmImUg9P",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/?success=true`,
    cancel_url: `${YOUR_DOMAIN}/?canceled=true`,
  });

  res.redirect("/checkout", session.url);
});

app.listen(3000, () => console.log("Running on port 3000"));
