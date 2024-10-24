'use client'
import React from 'react'
import Layout from "../_components/homepageComps/Layout";
import CommonParagraph from "../_components/homepageComps/CommonParagraph";
import Email from "../_assets/svgs/Email";
import Location from "../_assets/svgs/Location";
import Phone from "../_assets/svgs/Phone";
import ContactForm from '../landingpage/ContactForm'

const contactInfo = [
  {
    icon: Email,
    title: 'Email',
    description: 'Our friendly team is here to help.',
    contactInfo: 'support@runshifts.com',
  },
  {
    icon: Location,
    title: 'Office',
    description: 'Come say hello at our office HQ.',
    contactInfo: '100 Smith Street\nCollingwood VIC 3066 UK',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm.',
    contactInfo: '+1 (800) 123-4567',
  },
];

export default function page() {
  return (
    <Layout>
      <section className="bg-white">
        <div>
          <p className="text-center text-[#2D6316] text-xs not-italic font-medium leading-6 mt-4 text-[15px] md:text-xl xl:mt-16">
            Contact us
          </p>
          <ContactForm formType="contactus" />
        </div>

        <div className="flex flex-col items-center justify-between gap-16 mx-8 my-5 xl:flex-row xl:mx-28 xl:my-16">
  {contactInfo.map((item, index) => (
    <div key={index} className="flex flex-col items-center justify-center">
      <item.icon />
      <p className="text-center text-xl not-italic font-semibold leading-7 text-[#101828] pt-4">
        {item.title}
      </p>
      <CommonParagraph>{item.description}</CommonParagraph>
      <p className="text-center text-[#2D6316] text-xs not-italic font-bold leading-6 md:text-sm">
        {item.contactInfo.split('\n').map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  ))}
</div>
      </section>
    </Layout>
  )
}
