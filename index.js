const shortPhrases = [
  "Official Store",
  "Official UK Store",
  "Extended Warranties",
  "Authorised Store",
  "Authorised Retailer",
  "Authorised Reseller",
  "Elite Dealers Est 2001",
  "5-Star Reviews",
  "Happy Customer Reviews",
  "(product-type) Superstore",
  "(brand-name) Superstore",
  "In-stock with Best Prices",
  "Shop Now for Best Price",
  "Click Now, shop our Superstore",
  "Save Money, Click Now",
  "Start Saving, Click Now",
  "Price Match Promise",
  "Best Online Prices",
  "Best Prices Guaranteed",
  "Click to Save Money",
  "Click Now for Best Price",
  "(brand-name) Best Prices",
  "(brand-name) Price Match",
  "Expert Advice Given",
  "Chat With An Expert",
  "Get Expert Advice Today",
  "Expert Customer Services",
  "24hr Online Advice",
  "Fast Customer Helpline",
  "Expert Product Advice",
  "5-Star Customer Services",
  "Free P&P",
  "Free UK Delivery",
  "Fast Delivery Available",
  "Free Delivery Included",
];

const longPhrases = [
  "Official Retailer Est 2001",
  "Official (brand-name) Reseller",
  "Official (brand-name) Retailer",
  "Official (brand-name) Warranties",
  "Official Product Warranties",
  "Authorised Online Retailer",
  "Authorised (brand-name) Store",
  "Elite (brand-name) Dealer",
  "5-Star (brand-name) Reviews",
  "5_Star Customer Reviews",
  "Largest Online UK Retailer",
  "Largest (brand-name) Online Store",
  "Largest Online Superstore",
  "Largest Range of (product-type)",
  "One-Stop (brand-name) Superstore",
  "Huge Range of (brand-name)",
  "Massive Range of (product-type)",
  "Biggest Range at Best Prices",
  "Biggest Names In (product-type)",
  "Click Now to Save Money on (brand-name)",
  "For the Best Price, Click Now",
  "Click Now for Biggest-Names in (product-type)",
  "We are the Experts, Click Now",
  "Click Now to visit Audio Direct",
  "(brand-name) Discounted Today",
  "In-stock & Best Prices",
  "Huge Range, Best Prices",
  "Click Now to Save £££s",
  "Click Now & Save £££",
  "Chat Online with an Expert",
  "Real World Advice Given",
  "Call Today for Expert Advice",
  "Advice, before & after purchase",
  "Talk with our Experts",
  "Online Help, Expert Advice",
  "Honest, Frank Advice Given",
  "Fast, Efficient Delivery Service",
  "in-stock Next Day Delivery",
];

function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

const generate = document.getElementById("generate");
const result = document.getElementById("result");
const copyButton = document.getElementById("copy");

generate.addEventListener("click", () => {
  const selectedPhrase = document.querySelector('input[name="phrase"]:checked');

  if (selectedPhrase.value === "short") {
    result.innerText = shortPhrases[getRandomNumber(shortPhrases.length)];
  } else {
    result.innerText = longPhrases[getRandomNumber(longPhrases.length)];
  }

  copyButton.innerText = "Copy"

});

copyButton.addEventListener("click", () => {
    const textToCopy = result.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log("Copied to clipboard:", textToCopy);
        })
        .catch(err => {
            console.error("Failed to copy:", err);
        });

    copyButton.innerText = "Copied"


    setTimeout(() => {
        copyButton.innerText = "Copy"
    }, 2000)
});
