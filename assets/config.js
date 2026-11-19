/* ================================================================
   EDIT THIS BLOCK ONLY. Every page reads from it.
   Leave a value as "" and that button/form shows "Opening soon".
   ================================================================ */
var SITE = {
  formEmbedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeDewFssSMWpReHmBfYqtIWw0OdwnSO_G3owgUp5Aa3DUNFdw/viewform?embedded=true",
  formShareUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeDewFssSMWpReHmBfYqtIWw0OdwnSO_G3owgUp5Aa3DUNFdw/viewform",
  // Native branded sign-up posts straight into the same Google Form / Sheet.
  formAction: "https://docs.google.com/forms/d/e/1FAIpQLSeDewFssSMWpReHmBfYqtIWw0OdwnSO_G3owgUp5Aa3DUNFdw/formResponse",
  formFields: { name: "entry.1154333394", email: "entry.1809294512", interests: "entry.1470187448", career: "entry.188387492", consent: "entry.280203674" },
  consentText: "I agree to be emailed about The GenZ Executive. I can ask to be removed at any time.",
  // Proof. Leave empty until real; the section stays hidden. Each testimonial: {q:"quote", n:"Name", r:"Role, Organisation"}. Only add with written permission.
  testimonials: [],
  videoEmbedUrl: "",      // https YouTube or Vimeo embed URL of the 60-second welcome video
  sampleChapterUrl: "",   // https link to the sample chapter PDF
  // Free downloads shown after sign-up: [{t:'Free First 90 Days Checklist', u:'downloads/first-90-days-checklist.pdf'}]. Free files only; never put paid files in this public repo.
  freeDownloads: [{t:'Download the free First 90 Days Checklist', u:'downloads/first-90-days-checklist.pdf'}],
  // Payment links from Paystack (or IntaSend). One per product. "" = Opening soon.
  pay: { bundle: "", wb90: "", wb10: "", cvkit: "", jour: "", planner: "", meetings: "", strategy: "", budget: "", scorecards: "", toolkit: "", onepager: "", wallpapers: "" },
  offer: { ends: "2027-02-28T23:59:59+03:00" },
  payRegular: { bundle: "", wb90: "", wb10: "", cvkit: "", jour: "", planner: "", meetings: "", strategy: "", budget: "", scorecards: "", toolkit: "", onepager: "", wallpapers: "" },
  contactEmail: "ishaq.kassam@gmail.com",
  linkedin: "",
  deliveryPromise: "Your files are emailed to you within one working day of payment."
};
