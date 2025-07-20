// import heroBg from "../assets/images/hero-bg.jpg"; // Keeping for completeness if it were used in an <img>, but it's in a Tailwind class.
import oilStorageImg from "../assets/images/oil-storage.jpg";
import oilExplorationImg from "../assets/images/oil-exploration.jpg";
import oilProductionImg from "../assets/images/oil-production.jpg";
import oilRefiningImg from "../assets/images/oil-refining.png";
import oilTerminalImg from "../assets/images/oil-terminal.jpg";
import {
  fadeInAnimationVariants,
  fadeInFromLeft,
  fadeInFromRight,
  heroContentVariants,
  heroItemVariants,
} from "../animations";
// import clockImg from "../assets/images/clock.jpg"; // Keeping for completeness if it were used in an <img>, but it's in a Tailwind class.
import { motion } from "framer-motion";
import { useRef } from "react"; // Only need useRef if useInView is used directly on elements without `whileInView`

// Animation variants for reusability
function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url('assets/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gradient-to-br from-blue-800/80 via-blue-800/80 via-50% to-green-700/80">
          <motion.div
            className="h-[calc(100vh-50px)] gap-4 md:gap-7 mx-4 md:mx-48 flex flex-col justify-center items-center md:items-start text-white text-center md:text-left"
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold"
              variants={heroItemVariants}
            >
              Beton Refinery
            </motion.h1>
            <motion.p
              className="text-center md:text-left w-full md:w-2/3 text-sm md:text-base px-4"
              variants={heroItemVariants}
            >
              At the heart of modern industry, our oil refinery transforms crude
              oil into high-quality petroleum products. We fuel transportation,
              power industries, and enhance everyday life, all while
              prioritizing safety, environmental stewardship, and cutting-edge
              technology. We're dedicated to providing a reliable and
              sustainable energy supply for communities worldwide.
            </motion.p>
            <motion.div
              className="py-2 px-4 w-fit bg-blue-800 text-center border border-indigo-300 text-sm md:text-base cursor-pointer"
              variants={heroItemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(255,255,255,0.7)",
              }}
            >
              Get Quotes
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section>
        <div className="py-10 px-4 md:py-18 md:px-6 flex flex-col gap-10 md:gap-18 mx-4 md:mx-20 rounded-md font-bold mt-[-80px] md:mt-[-150px] bg-neutral-200 shadow-xl">
          <motion.h1
            className="text-shadow-lime-900 text-2xl md:text-4xl w-full text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }} // Made duration and ease uniform
          >
            Our Services
          </motion.h1>
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                img: oilStorageImg,
                alt: "Oil and gas Storage",
                title: "Oil and gas Storage",
                desc: "Secure and efficient storage solutions for crude oil and refined petroleum products, ensuring supply chain stability and operational flexibility.",
              },
              {
                img: oilExplorationImg,
                alt: "Oil exploration",
                title: "Oil Exploration",
                desc: "Utilizing cutting-edge technology and geological expertise to identify, assess, and develop new oil and gas reserves globally.",
              },
              {
                img: oilProductionImg,
                alt: "Oil production",
                title: "Oil Production",
                desc: "Responsible and efficient extraction of crude oil and natural gas from diverse reservoirs, adhering to the highest safety and environmental standards.",
              },
              {
                img: oilRefiningImg,
                alt: "Oil refining",
                title: "Oil Refining",
                desc: "Transforming crude oil into a wide range of high-quality fuels and petrochemical feedstocks using advanced refining processes and technology.",
              },
              {
                img: oilTerminalImg,
                alt: "Oil and gas Terminal",
                title: "Oil and gas Terminal",
                desc: "State-of-the-art terminals for the seamless handling, processing, and distribution of crude oil, refined products, and natural gas to global markets.",
              },
            ].map((service, index) => (
              <motion.li
                key={service.title}
                custom={index}
                variants={fadeInAnimationVariants}
              >
                <motion.div
                  className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-48 object-cover rounded-md"
                  />

                  <h3 className="text-xl md:text-2xl font-bold text-blue-800 mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm md:text-base">
                    {service.desc}
                  </p>
                  <motion.a
                    href="#"
                    className="mt-4 text-orange-500 flex items-center text-sm md:text-base"
                    whileHover={{ x: 5, color: "#FF8C00" }} // Darker orange on hover
                    transition={{ duration: 0.2 }}
                  >
                    Learn More <span className="ml-1">&rarr;</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
      <section className="pt-20 pb-10 md:pt-40 md:pb-20 px-4">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold mb-10 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }} // Made duration and ease uniform
        >
          Why Choose Us
        </motion.h2>
        <div className="bg-blue-600 rounded-3xl mx-4 md:mx-24 p-8 md:p-16 flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div
            className="flex-1 text-white pr-0 md:pr-4 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInFromLeft}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              You need Us
            </h3>
            <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
              Beton Refinery is one of the largest petrochemical companies and a
              global leader in hydrocarbon reserves and liquid hydrocarbon
              production.
            </p>
            <p className="mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              A variety of oil products are produced at Beton Refinery. Among
              them are several kinds of motor gasoline, diesel fuel, oil fuel
              (mazout), liquefied hydrocarbon gases, vacuum gas oil, technical
              sulfur,
            </p>
            <motion.button
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow-lg text-sm md:text-base"
              whileHover={{ scale: 1.05, backgroundColor: "#E0E0E0" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get Quotes
            </motion.button>
          </motion.div>
          <motion.div
            className="flex-1 grid grid-cols-2 gap-4 w-full md:w-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInFromRight}
          >
            {[
              "https://i.pinimg.com/736x/56/0d/ad/560dad8fc28518c65c6ac1a358a48edc.jpg",
              "https://i.pinimg.com/1200x/ac/43/cd/ac43cdc2b25f29db2daf418448e79296.jpg",
              "https://i.pinimg.com/736x/52/bf/25/52bf25760c5d2084f6cde30e702cc266.jpg",
              "https://i.pinimg.com/1200x/52/d3/91/52d39109e0642d40ce619821ff52cd51.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-32 md:h-48 object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="pt-10 pb-10 md:pt-20 md:pb-20 px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-4 md:mx-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimationVariants} // This section's cards will now glide up using the updated variants
        >
          {[
            {
              img: oilRefiningImg,
              alt: "Quality Assurance in oil refining",
              title: "Quality Assurance",
              desc: "Performance, dependability, and durability were used to gauge the quality. The most crucial factor that sets a firm apart from its rivals is quality.",
              colSpan: "col-span-1 md:col-span-2",
            },
            {
              img: oilExplorationImg,
              alt: "Modern devices for oil exploration",
              title: "Modern Devices",
              desc: "TARAZ OIL REFINING LLP has made investments in cutting-edge machinery, including innovations, in order to gradually minimize energy, material, and natural resource use while maintaining maximum output.",
            },
            {
              img: oilTerminalImg,
              alt: "Innovation in oil terminal operations",
              title: "Innovation",
              desc: "We offer integrated, comprehensive, and cost-effective solutions for all of your fuel, oil, and gas demands. TARAZ OIL REFINING LLP an organization focused on research, provides a broad range of energy solutions.",
            },
            {
              img: oilProductionImg,
              alt: "Safety protocols in oil production",
              title: "Safety",
              desc: "Implementing rigorous safety protocols and continuous training to ensure the well-being of our workforce and protect the environment.",
              colSpan: "col-span-1 md:col-span-2",
            },
            {
              img: oilStorageImg,
              alt: "Warehouse support for oil and gas storage",
              title: "Warehouse Support",
              desc: "Providing comprehensive logistics and storage solutions to efficiently manage and distribute our diverse range of products.",
            },
            {
              img: oilRefiningImg,
              alt: "Oil refining contributing to industrial economy",
              title: "Industrial Economy",
              desc: "Optimizing operational efficiency and resource utilization to contribute to a sustainable and robust industrial economic landscape.",
            },
            {
              img: oilStorageImg,
              alt: "Safe chemical handling in storage facilities",
              title: "Chemical Handling",
              desc: "Adhering to strict guidelines and best practices for the safe and secure handling, storage, and transportation of all chemicals.",
              colSpan: "col-span-1 md:col-span-2",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col ${item.colSpan || ""}`}
              custom={index}
              variants={fadeInAnimationVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-40 md:h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section>
        <motion.div
          className="bg-gradient-to-r from-blue-400 via-blue-800 via-90% to-blue-900 p-6 rounded-lg shadow-md max-w-4xl my-10 md:my-24 py-12 md:py-24 px-4 md:px-14 flex flex-col items-center gap-8 md:gap-18 mx-4 md:mx-auto text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }} // Added ease for smoother animation
        >
          <motion.h1
            className="text-xl md:text-3xl text-gray-300/80 w-full md:w-3/4 text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }} // Made duration and ease uniform
          >
            “We are running a project that handles chemicals safely and securely
            “.
          </motion.h1>
          <motion.ul
            className="list-disc flex flex-col md:flex-row gap-4 md:gap-8 text-base md:text-xl text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
              ease: "easeOut",
              staggerChildren: 0.1,
            }} // Made duration and ease uniform
          >
            {[
              "Safety",
              "Warehouse support",
              "Industrial Economy",
              "Chemical handling",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={heroItemVariants}
                whileHover={{ scale: 1.1, color: "#FFD700" }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
      <section className="bg-[url('assets/images/clock.jpg')] bg-cover bg-center">
        <div className="bg-blue-800/30 py-10 md:py-20">
          <motion.div
            className="mx-auto max-w-4xl flex flex-col items-center justify-center text-white text-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={heroContentVariants} // Reusing for consistency
          >
            <motion.p
              className="text-base md:text-3xl mb-6 md:mb-10 leading-relaxed"
              variants={heroItemVariants}
            >
              “ We help hardware start-ups integrate technology, scale and
              desirability without compromise ”
            </motion.p>
            <motion.button
              className="px-4 py-2 bg-white rounded-lg text-black font-semibold shadow-xl text-sm md:text-base"
              variants={heroItemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#E0E0E0" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get a Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
