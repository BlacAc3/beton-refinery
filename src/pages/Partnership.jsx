import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Partnership = () => {
  return (
    <section className="flex flex-col min-h-screen">
      {/* Partnership Header Section */}
      <div
        className={`py-24 md:py-42 relative flex items-center justify-center`}
      >
        {/* Blurred background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url('assets/images/partnership_worker.webp')] filter blur-[2px]"
          aria-hidden="true"
        ></div>
        {/* Content (Partnership title) on top of the blurred background */}
        <div className="relative  flex items-center justify-center">
          <h1 className="text-center text-white text-3xl md:text-4xl font-bold">
            Partnership
          </h1>
        </div>
      </div>

      {/* Main Content Area - Achinsk Refinery Details */}
      <div className=" flex-grow z-10 mt-[-40px] md:mt-[-80px] mx-auto w-11/12 max-w-5xl bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-12 mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
          Our Partner
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Achinsk Refinery
        </h3>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          The Achinsk refinery is the only major refinery in the Krasnoyarsk
          territory, and is a key petroleum product supplier to the neighbouring
          regions.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          The plant was acquired by Rosneft in May 2007.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          The refinery's crude distillation capacity equals 7.5 mln tons (54.8
          mln barrels) per year. The Achinsk Refinery processes West Siberian
          crude delivered via the Transneft pipeline system. The plant's deep
          conversion facilities include catalytic reforming, jet and diesel fuel
          hydrotreatment, and bitumen production.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          The refinery specializes in the production of motor and jet fuels. All
          in all, the Achinsk Refinery produces more than 100 different grades
          of petroleum products. The plant's outputs are primarily distributed
          in Krasnoyarsk Krai and in the neighboring regions.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          In 2014 the Achinsk Refinery processed 5.1 million tons of oil and
          produced 4.9 million tons of commodities. The refining depth made up
          64.4%.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          Since 2014, the Achinsk Refinery has been producing car gasoline
          conforming to Euro-5 standard.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          The construction and assembly works are continuing at the integrated
          petroleum coke production unit with the capacity of 3 million tons per
          year for residual oil, and hydrocracking facility with integrated
          diesel fuel hydrotreatment unit with the capacity of 3.65 million tons
          per year with off-site facilities (57 facilities).
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          Commissioning of hydrocracking facility will enable the enterprise to
          carry out complete transition to production of diesel fuels conforming
          to Euro-5 standard.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-2 text-gray-700">
          The CAW volumes completed as of 01.01.2015 totaled:
        </p>
        <ul className="list-disc pl-6 sm:pl-8 mb-4 text-base sm:text-lg text-gray-700">
          <li className="mb-1">
            for the hydrocracking and hydrotreatment facility with off-site
            facilities 27%;
          </li>
          <li className="mb-1">
            for the integrated petroleum coke integrated production unit 50%.
          </li>
        </ul>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          The Achinsk Refinery has fully resumed works relating to production of
          motor fuels in accordance with the process flow diagram at LU-6U
          plant, which was affected during the accident in June, 2014. The works
          aimed at reconstruction of 400 section (GFU) are continuing.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          Summary Investorsments into Achinsk Refinery in 2014 totaled 12
          billion rubles net of VAT.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
          Rosneft is not responsible for unofficial web sites content and has no
          control over content of web sites or information not located on the
          Company servers.
        </p>

        <h4 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-800">
          Contact information:
        </h4>
        <p className="text-base sm:text-lg mb-2 text-gray-700">
          Legal name: OJSC Achinsk Refinery of the Eastern Oil Company
        </p>
        <p className="text-base sm:text-lg mb-2 text-gray-700">
          General Director: Alexei Demakhin
        </p>
        <p className="text-base sm:text-lg mb-2 text-gray-700">
          Address: Achinsk Refinery industrial area, Bolsheuluisky district
          662110, Krasnoyarsk territory, Russia
        </p>
        <p className="text-base sm:text-lg mb-2 text-gray-700">
          Tel.: +7 (39159) 5-33-10
        </p>
        <p className="text-base sm:text-lg mb-2 text-gray-700">
          Fax: +7 (39159) 5-37-10
        </p>
        <p className="text-base sm:text-lg mb-2 text-gray-700">
          E-mail: Sekr@anpz-rosneft.com
        </p>
        <p className="text-base sm:text-lg text-blue-600 hover:underline text-wrap">
          <a
            className="break-words"
            _blank="True"
            href="https://www.rosneft.com/business/Downstream/Neftepererabotka/OilRefineries/AchinskRefinery/"
          >
            https://www.rosneft.com/business/Downstream/Neftepererabotka/OilRefineries/AchinskRefinery/
          </a>
        </p>
      </div>
    </section>
  );
};

export default Partnership;
