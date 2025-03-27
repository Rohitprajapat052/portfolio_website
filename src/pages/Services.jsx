import React from "react";
// import { useNavigate } from "react-router-dom";

const Services = () => {
  // const navigate = useNavigate();

  const pricedServices = [
    { title: "ITR Filings", price: "₹599/year" },
    { title: "TDS Return Filing", price: "₹1299/Return" },
    { title: "Company Registration & ROC Filing", price: "₹14,999" },
    { title: "GST Return Filing", price: "₹1,499/Registration & ₹5,999 " },
  ];

  const moreServices = [
    "Accounting Service",
    "Income Tax /GST Notice -Resolve",
    "Startup Certificate",
    "Other Registrations: MSME, Food License, Trade License, etc.",
  ];

  return (
    <div className="w-full bg-gray-100 text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-[#EFA139] tracking-wide">
          Our <span className="text-[#EFA139]">Services</span>
        </h2>
        <p className="text-lg text-gray-700 mt-3 max-w-3xl mx-auto">
          File Your ITR in 30 minutes. Plans starting at just ₹599.
        </p>

        <div className="w-20 h-1 bg-[#EFA139] mx-auto mt-4 mb-10"></div>

        {/* Services with Pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {pricedServices.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-xl text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <h4 className="text-2xl font-semibold text-black">{service.title}</h4>
              <p className="mt-3 text-lg text-[#EFA139] font-medium">
                Starting at {service.price}
              </p>
              {/* <button
                className="mt-6 px-6 py-3 bg-[#EFA139] text-white rounded-lg hover:bg-[#d98f2c] transition-all shadow-md"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </button> */}
            </div>
          ))}
        </div>

        {/* Contact for More Services Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-[#EFA139] tracking-wide">
            Contact for More Services
          </h2>
          <p className="text-lg text-gray-700 mt-3 max-w-3xl mx-auto">
            Need additional tax or financial services? Reach out to us for customized solutions.
          </p>

          <div className="w-20 h-1 bg-[#EFA139] mx-auto mt-4 mb-8"></div>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {moreServices.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg text-center text-lg font-medium hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                {service}
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Services;
