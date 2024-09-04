import CommonButtons from "../_components/homepageComps/CommonButtons";
import GreenCheck from "../_assets/svgs/GreenCheck";

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
    href: "/signup?type=for-profit",
  },
];

function PricingPlans() {
  return (
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
              <a href={plan.href} className="block px-3 rounded-md text-center">
                {plan.buttonText}
              </a>
            </CommonButtons>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PricingPlans;
