import React from "react";
import ContactPage from "../components/ContactPage";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with George Onisiforou — copy email, reach out for collaborations, or discuss a project."
        path="/contact"
      />
      <ContactPage />
    </>
  );
}
