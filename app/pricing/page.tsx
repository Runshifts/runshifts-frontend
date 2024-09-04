import React from "react";
import CommonTitle from "../_components/homepageComps/CommonTitle";
import CommonHeader from "../_components/homepageComps/CommonHeader";
import CommonParagraph from "../_components/homepageComps/CommonParagraph";
import CommonButtons from "../_components/homepageComps/CommonButtons";
import InnerHeader from "../_components/homepageComps/InnerHeader";
import Layout from "../_components/homepageComps/Layout";
import Plans from "./Plans";

export default function Pricing() {
  return (
    <Layout>
      <div className=" px-4 my-8 flex flex-col items-center justify-center">
        <CommonTitle>Pricing</CommonTitle>
        <CommonHeader>Simple, transparent pricing</CommonHeader>
        <CommonParagraph>
          We believe RunShifts should be accessible to all companies, no matter
          the size.{" "}
        </CommonParagraph>
      </div>

      <div>
        <Plans />
      </div>
    </Layout>
  );
}
