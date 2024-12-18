"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Sponsor data with logos
const sponsors = [
  {
    id: 1,
    name: "Deloitte",
    tier: "Platinum",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728391070/Deloitte-Logo_drssm6.jpg",
    web: "https://www2.deloitte.com/in/en.html",
    description:
      "Deloitte Digital uses creativity, technology, data-driven insights, and the power of partnership to help you transform impersonal transactions into trusted relationships. We have a proven history of delivering some of the most inventive and complex projects around the world with unmatched quality of delivery.",
  },
  {
    id: 2,
    name: "Cognizant",
    tier: "Gold",
    logo: "https://www.witdreamin.com/Cognizant.png",
    web: "https://www.cognizant.com",
    description:
      "In today’s fast-changing technology landscape, Cognizant works with clients to advance every aspect of how they serve their customers: digitizing their products, services, and customer experiences; automating their business processes; and modernizing their technology infrastructures.",
  },
  {
    id: 3,
    name: "Cloud Fulcrum",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1727465196841-0ebf9253-eed2-44c0-bb86-eb2dc8f23796.png",
    web: "https://www.cloudfulcrum.com",
    description:
      "CloudFulcrum is a global professional services firm specializing in Salesforce DevOps, Enterprise DevOps, and Digital Transformation.",
  },
  {
    id: 4,
    name: "360 SMS",
    tier: "Silver",
    logo: "https://www.witdreamin.com/cti.png",
    web: "https://360smsapp.com",
    description:
      "Leading the charge in Salesforce innovation, 360 Degree Cloud is a global powerhouse delivering unmatched value to businesses.",
  },
  {
    id: 5,
    name: "Exavalue",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1726416420491-074a6654-4a7b-4b9e-8436-1b5b8213f152.png",
    web: "https://www.exavalu.com",
    description:
      "Exavalu is a specialized digital transformation partner, delivering cutting-edge solutions to industries like Insurance, financial services, and healthcare.",
  },
  {
    id: 6,
    name: "SmartInternz",
    tier: "Learning Partner",
    logo: "https://witblogpic.s3.amazonaws.com/1727465140282-9c85e3cb-3c4e-4012-9646-68768600808e.png",
    web: "https://www.smartinternz.com",
    description:
      "SmartBridge has emerged as a leading edtech solution provider for bridging the gap between academia and industry through innovative training programs.",
  },
  {
    id: 7,
    name: "Trailblazex",
    tier: "Bronze",
    logo: "https://www.witdreamin.com/tbx.png",
    web: "https://www.trailblazex.com",
    description:
      "Trailblazex, your digital transformation partner, empowers businesses with cutting-edge technology solutions specializing in Salesforce services and Cloud solutions.",
  },
  {
    id: 8,
    name: "BrinkView",
    tier: "Bronze",
    logo: "https://brinkview.com/wp-content/uploads/2024/01/BV-Logo-1024x483.png",
    web: "https://brinkview.com",
    description:
      "Brinkview is a design-driven interdisciplinary consultancy headquartered in Pune with a mix bag of remote and in-house workforce.",
  },
  {
    id: 9,
    name: "PCS Global",
    tier: "NextGen",
    logo: "https://www.witdreamin.com/PCSglobal.png",
    web: "https://www.pcsglobal.in/#/home",
    description:
      "PCS Global Pvt. Ltd. partners with clients to provide tailored solutions, leveraging industry expertise to meet their needs across sectors.",
  },
  {
    id: 10,
    name: "Perigeon",
    tier: "NextGen",
    logo: "https://witblogpic.s3.amazonaws.com/1727465254366-2ea7f7b2-7bd0-4ec0-8077-4c4d35324d01.jpeg",
    web: "https://www.perigeon.com",
    description:
      "Perigeon specializes in crafting innovative, technically complex solutions for dynamic IT needs. We prioritize quality to ensure optimal returns for clients.",
  },
  {
    id: 12,
    name: "Copado",
    tier: "Wifi",
    logo: "https://www.witdreamin.com/copado.png",
    web: "https://www.copado.com",
    description:
      "Level Up with Copado Academy and tap into our DevOps Exchange for game-changing solutions, backed by global support and events.",
  },
  {
    id: 13,
    name: "Cyntexa",
    tier: "Photography",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUq2lofwjYFAyLCBp1AO9ekt2MEpCoAXXDw&s",
    web: "https://www.cyntexa.com",
    description:
      "Cyntexa is more than just a leading Salesforce consulting company—we’re a dynamic community that thrives on innovation, collaboration, and inclusivity.",
  },
  {
    id: 16,
    name: "Creatique Technologies",
    tier: "NextGen",
    logo: "https://creatiquetech.com/wp-content/uploads/2023/05/final-logo.png",
    web: "https://creatiquetech.com",
    description:
      "We deliver tailored Salesforce solutions and services to help small, medium, and enterprise clients optimize processes and maximize their Salesforce investment.",
  },
  {
    id: 17,
    name: "Agile Cloud Consulting",
    tier: "NextGen",
    logo: "https://agilecloudconsulting.com/wp-content/uploads/2024/03/Horizontal-Logo-Blue-1-1-768x244.png",
    web: "https://agilecloudconsulting.com",
    description:
      "Agile Cloud Consulting provides comprehensive Salesforce services, including implementation, support, data migration, system integration, and product development.",
  },
  {
    id: 18,
    name: "Salesforce",
    tier: "Diamond",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729755053/Trailhead_Audience_Groups_Developers_Vert_Logo_RGB_co33or.png",
    web: "https://www.salesforce.com",
    description:
      "Salesforce helps you explore the transformative power of agents and generative AI in app development with workshops and resources for developers and admins.",
  },
];

// Define gradients and text colors for each tier
const tierStyles = {
  Diamond: {
    gradient: "bg-transparent",
    textColor: "text-gray-100",
  },
  Platinum: {
    gradient: "bg-transparent",
    textColor: "text-gray-100",
  },
  Gold: {
    gradient: "bg-transparent",
    textColor: "text-gray-100",
  },
  Silver: {
    gradient: "bg-transparent",
    textColor: "text-gray-200",
  },
  Bronze: {
    gradient: "bg-transparent",
    textColor: "text-red-100",
  },
  NextGen: {
    gradient: "bg-transparent",
    textColor: "text-white",
  },
  Wifi: {
    gradient: "bg-transparent",
    textColor: "text-gray-100",
  },
  Photography: {
    gradient: "bg-transparent",
    textColor: "text-white",
  },
  "Learning Partner": {
    gradient: "bg-transparent",
    textColor: "text-gray-800",
  },
};

// Function to get the tier rank based on the desired hierarchy
const getTierRank = (tier) => {
  switch (tier) {
    case "Diamond":
      return 0; // Diamond is now the highest priority
    case "Platinum":
      return 1;
    case "Gold":
      return 2;
    case "Silver":
      return 3;
    case "Bronze":
      return 6;
    case "Wifi":
      return 5;
    case "NextGen":
      return 7;
    case "Photography":
      return 4;
    case "Learning Partner":
      return 2.5;
    default:
      return 11; // For any undefined tiers
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }, // Exit animation
};

const Sponsors = () => {
  // Sort sponsors by tier rank
  const sortedSponsors = [...sponsors].sort(
    (a, b) => getTierRank(a.tier) - getTierRank(b.tier)
  );

  // Group sponsors by tier
  const groupedSponsors = sortedSponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  const [description, setDescription] = useState("");
  const [webLink, setWebLink] = useState(""); // New state for web link
  const [showModal, setShowModal] = useState(false);

  const openModal = (sponsor) => {
    setDescription(sponsor.description || "No description available.");
    setWebLink(sponsor.web || ""); // Set the web link
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5">
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              className="bg-white outline-blue-700 border-blue-700 border-6 rounded-lg shadow-6xl w-11/12 max-w-md p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <p className="text-center">{description}</p>
              </div>
              <div className="flex justify-around">
                <button
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5"
                  onClick={closeModal}
                >
                  Close
                </button>
                {/* New Know More button */}
                {webLink && (
                  <Link target="_blank" href={webLink}>
                    <p
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
                    >
                      Know More
                    </p>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        className="max-w-7xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {[
          "Diamond",
          "Platinum",
          "Gold",
          "Learning Partner",
          "Silver",
          "Photography",
          "Wifi",
          "Bronze",
          "NextGen",
        ].map((tier) => (
          <div key={tier} className="mb-10">
            <h2 className="text-3xl font-extrabold underline text-center text-emerald-600 mb-6">
              {tier}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {groupedSponsors[tier]?.map((sponsor) => (
                <motion.div
                  onClick={() => openModal(sponsor)}
                  key={sponsor.id}
                  className={`${
                    tierStyles[sponsor.tier]?.gradient
                  } rounded-lg shadow-2xl p-6 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 flex flex-col items-center`}
                  variants={item}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }} // Exit transition
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    className="w-[80vw] h-24 mb-4 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Sponsors;
