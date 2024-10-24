'use client'
import { useState } from "react";
import CommonButtons from "../_components/homepageComps/CommonButtons";
import GreenCheck from "../_assets/svgs/GreenCheck";
import ContactForm from "../landingpage/ContactForm";

const plans = [
  {
    price: "50p/day",
    planName: "Started plan",
    billingCycle: "Billed monthly",
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "1 - 10 team members",
      "Basic chat and email support",
    ],
    buttonText: "Start 14 days trial",
    href: "/signup?type=for-profit",
  },
  {
    price: "£1/day",
    planName: "Basic plan",
    billingCycle: "Billed monthly",
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "10 - 50 team members",
      "Basic chat and email support",
    ],
    buttonText: "Start 14 days trial",
    href: "/signup?type=for-profit",
  },
  {
    price: "£3/day",
    planName: "Business plan",
    billingCycle: "Billed monthly",
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "50 - 250 team members",
      "Basic chat and email support",
    ],
    buttonText: "Start 14 days trial",
    href: "/signup?type=for-profit",
  },
  {
    price: "Request Quote",
    planName: "Enterprise plan",
    billingCycle: "Billed monthly",
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "250+ team members",
      "Basic chat and email support",
    ],
    buttonText: "Let's chat",
    isEnterprise: true, // Add this flag to identify the enterprise plan
  },
];

function PricingPlans() {
  const [showModal, setShowModal] = useState(false);

  const handlePlanClick = (plan, e) => {
    if (plan.isEnterprise) {
      e.preventDefault();
      setShowModal(true);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setShowModal(false);
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 mx-6 xl:grid-cols-4 xl:mx-12 mb-28">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-4 border shadow-xl rounded-xl flex flex-col justify-between h-full"
          >
            <div>
              <h1
                className={`text-center not-italic font-semibold rounded-full my-2 md:my-4 ${
                  plan.price === "Request Quote"
                    ? "text-xl md:text-3xl"
                    : "text-2xl md:text-5xl"
                } text-[#36322F]`}
              >
                {plan.price.split("/")[0]}
                {plan.price !== "Request Quote" && (
                  <span className="text-sm xl:text-2xl">
                    /{plan.price.split("/")[1]}
                  </span>
                )}
              </h1>
              <p className="text-center text-xl not-italic font-semibold leading-7 text-[#101828]">
                {plan.planName}
              </p>
              <p className="text-center text-base not-italic font-normal leading-6 text-[#475467]">
                {plan.billingCycle}
              </p>
              <div className="flex flex-col items-start justify-center my-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center justify-center mb-3">
                    <GreenCheck />
                    <p className="text-center text-base not-italic font-normal leading-6 text-[#475467] ml-2">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto mx-auto mb-2">
              <CommonButtons>
                {plan.isEnterprise ? (
                  <div
                    onClick={(e) => handlePlanClick(plan, e)}
                    className="block px-3 rounded-md text-center"
                  >
                    {plan.buttonText}
                  </div>
                ) : (
                  <a href={plan.href} className="block px-3 rounded-md text-center">
                    {plan.buttonText}
                  </a>
                )}
              </CommonButtons>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-40 flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 my-6 max-h-[90vh] flex flex-col">
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-500 p-2"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto p-6 flex-1">
              <ContactForm formType="pricing" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PricingPlans;