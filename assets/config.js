/* ================================================================
   EDIT THIS BLOCK ONLY. Every page reads from it.
   Leave a value as "" and that button/form shows "Opening soon".
   ================================================================ */
var SITE = {
  formEmbedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeDewFssSMWpReHmBfYqtIWw0OdwnSO_G3owgUp5Aa3DUNFdw/viewform?embedded=true",
  formShareUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeDewFssSMWpReHmBfYqtIWw0OdwnSO_G3owgUp5Aa3DUNFdw/viewform",
  // Native branded sign-up posts straight into the same Google Form / Sheet.
  formAction: "https://docs.google.com/forms/d/e/1FAIpQLSeDewFssSMWpReHmBfYqtIWw0OdwnSO_G3owgUp5Aa3DUNFdw/formResponse",
  formFields: { name: "entry.1154333394", email: "entry.1809294512", interests: "entry.1470187448", career: "entry.188387492", source:"entry.2129233736", /* paste the entry.XXXX id of a short-answer question named Source to record which page each sign-up came from */
    consent: "entry.280203674" },
  consentText: "I agree to be emailed about The GenZ Executive. I can ask to be removed at any time.",
  // Proof. Leave empty until real; the section stays hidden. Each testimonial: {q:"quote", n:"Name", r:"Role, Organisation"}. Only add with written permission.
  testimonials: [],
  videoEmbedUrl: "",      // https YouTube or Vimeo embed URL of the 60-second welcome video
  sampleChapterUrl: "",   // https link to the sample chapter PDF
  // Free downloads shown after sign-up: [{t:'Free First 90 Days Checklist', u:'downloads/first-90-days-checklist.pdf'}]. Free files only; never put paid files in this public repo.
  freeDownloads: [{t:'Download the free First 90 Days Checklist', u:'downloads/first-90-days-checklist.pdf'}],
  // Payment links from Paystack (or IntaSend). One per product. "" = Opening soon.
  pay: { bundle: "", wb90: "", wb10: "", jour: "", planner: "", meetings: "", strategy: "", scorecards: "", toolkit: "", onepager: "", wallpapers: "" },
  // On-site checkout: Paystack popup + the payments Worker (see book/50). BOTH must be filled to switch it on.
  // Until then Buy buttons fall back to the pay links above, then to an order email. paystackKey is the PUBLIC key (pk_...), safe to publish.
  checkout: { paystackKey: "pk_test_a83e3234ef67ed51377fd89bafc5c888d58b5c04", worker: "https://pay.genzexecutive.com" },
  offer: { ends: "2027-02-28T23:59:59+03:00" },
  payRegular: { bundle: "", wb90: "", wb10: "", jour: "", planner: "", meetings: "", strategy: "", scorecards: "", toolkit: "", onepager: "", wallpapers: "" },
  // MailerLite: paste the form action URL from your MailerLite embedded form (https://assets.mailerlite.com/jsonp/ACCOUNT/forms/FORMID/subscribe). Leave empty until ready.
  mailerliteAction: "https://assets.mailerlite.com/jsonp/2809345/forms/204567460482909852/subscribe",
  // Ask Ishaq form (Google Form). Paste the formResponse URL and the entry ids. Empty = opens the visitor's email app instead.
  ask: { action: "https://docs.google.com/forms/d/e/1FAIpQLSd3pqNU3zoM63YpgB6ztMuv9Ttq4ZeGjXEd7AofMDwV0EOX0Q/formResponse", fields: { type: "entry.1677326359", message: "entry.1313779110", name: "entry.616311508", email: "entry.948189006", feature: "entry.1511880767" } },
  giftUrl: "",
  pledgeUrl: "",
  contactEmail: "ishaq.kassam@gmail.com",
  linkedin: "",
  deliveryPromise: "Your files are emailed to you within one working day of payment."
};
