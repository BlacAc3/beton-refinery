import { motion } from "framer-motion";
import aboutPetroleum from "../assets/images/about_ref1.webp";
import CarbonBusinessSVG from "../assets/carbon_business-metrics.svg";
import GroupSVG from "../assets/about_team.svg";
import FeedbackSVG from "../assets/about_feedback.svg";
import {
  fadeInAnimationVariants,
  fadeInFromRight,
  heroItemVariants,
  heroContentVariants,
} from "../animations";

const About = () => {
  return (
    <>
      <section>
        <div className="p-20 md:p-44 flex justify-center items-center bg-[url('assets/images/city_image.webp')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-3xl sm:text-5xl text-white font-bold">
            About us
          </h1>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center ">
        <div className="max-w-3xl py-10 md:py-24 px-4">
          <p className="mx-auto text-center text-blue-600 leading-loose">
            Beton Refinery is among the leading Kazakhstan oil and energy
            companies in playing a key role in the linking of the Kazakhstan
            energy resources to the international production and consumer’s
            market. The company is internationally recognised and integrated
            into the international market complex. The industrial complex of the
            company involves steadily developing enterprises of the production
            of crude oil and gaseous, petroleum refining, Mining, petrochemical
            production, transportation of solid and liquid petroleum products
            and many other energy related industrial activities.
          </p>
        </div>
        <motion.a
          href="/contact"
          className=" text-white flex "
          variants={heroItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
          }}
        >
          <div className="bg-blue-900  hover:bg-blue-950 px-6 py-2 text-lg font-semibold">
            Contact Us
          </div>
          <div>
            <span className="flex justify-center items-center px-3 py-2 text-white text-center w-full h-full bg-blue-800 hover:bg-blue-900 transition duration-300 ease-in-out text-2xl font-bold leading-none">
              &rarr;
            </span>
          </div>
        </motion.a>
      </section>
      <section className="flex flex-col text-blue-900  min-[800px]:flex-row items-center gap-4 my-10 mx-4 min-[800px]:m-20 justify-center py-10 min-[800px]:py-20 px-4">
        <motion.div
          className="w-full min-[800px]:w-3/5 p-4 flex justify-center"
          variants={heroItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={aboutPetroleum} // Placeholder image path
            alt="Industry Process"
            className="rounded-lg shadow-xl max-w-full h-auto object-cover"
          />
        </motion.div>
        <motion.div
          className="w-full min-[800px]:w-1/2 lg:w-3/5 p-4 text-left flex flex-col justify-between"
          variants={fadeInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-base md:text-lg mb-4 leading-loose">
            The production of petroleum products that comply with regulatory
            documents, the development of the production of jet fuel of the Jet
            A-1 brand and winter diesel fuel are the current top priorities for
            the Petrochemical Plant. These goals include the safe operation of
            the business with oil refining in the quantities required for the
            needs of the nation. By implementing a system of equipment
            maintenance and repair that ensures operational reliability and
            adheres to Honeywell’s best worldwide standards, the company is able
            to operate production with a prolonged overhaul period.
          </p>
          <ul className="text-lg leading-loose list-disc pl-5">
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial" // Changed to match fadeInAnimationVariants
              whileInView="animate" // Changed to match fadeInAnimationVariants
              viewport={{ once: true, amount: 0.2 }}
              custom={0} // Add custom for stagger
            >
              Value
            </motion.li>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial" // Changed to match fadeInAnimationVariants
              whileInView="animate" // Changed to match fadeInAnimationVariants
              viewport={{ once: true, amount: 0.2 }}
              custom={1} // Add custom for stagger
            >
              Business Administration
            </motion.li>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial" // Changed to match fadeInAnimationVariants
              whileInView="animate" // Changed to match fadeInAnimationVariants
              viewport={{ once: true, amount: 0.2 }}
              custom={2} // Add custom for stagger
            >
              Years of Surface Service
            </motion.li>
          </ul>
        </motion.div>
      </section>
      <section className="py-10 px-4 md:py-20 md:px-10">
        <motion.ul
          className="flex flex-col md:flex-row justify-around text-[#19456b] gap-y-10"
          // Removed initial, whileInView, and transition from UL.
          // Each LI will trigger its own fadeInAnimationVariants with custom stagger.
        >
          <motion.li
            className="flex flex-col items-center"
            variants={fadeInAnimationVariants}
            initial="initial" // Changed to match fadeInAnimationVariants
            whileInView="animate" // Changed to match fadeInAnimationVariants
            viewport={{ once: true, amount: 0.5 }} // Added to trigger individual animation on scroll
            whileHover={{ scale: 1.05 }} // Add hover interactivity
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            custom={0} // Add custom for stagger
          >
            <img
              className="h-20"
              src={CarbonBusinessSVG}
              alt="carbon-business-metrics"
            />
            <p className="font-bold text-xl">4.4</p>
            <p>billion m3</p>
          </motion.li>
          <motion.li
            className="flex flex-col items-center"
            variants={fadeInAnimationVariants}
            initial="initial" // Changed to match fadeInAnimationVariants
            whileInView="animate" // Changed to match fadeInAnimationVariants
            viewport={{ once: true, amount: 0.5 }} // Added to trigger individual animation on scroll
            whileHover={{ scale: 1.05 }} // Add hover interactivity
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            custom={1} // Add custom for stagger
          >
            <img
              className="h-20"
              src={GroupSVG}
              alt="carbon-business-metrics"
            />
            <p className="font-bold text-xl">324</p>
            <p>Thousand tonnes</p>
          </motion.li>
          <motion.li
            className="flex flex-col items-center"
            variants={fadeInAnimationVariants}
            initial="initial" // Changed to match fadeInAnimationVariants
            whileInView="animate" // Changed to match fadeInAnimationVariants
            viewport={{ once: true, amount: 0.5 }} // Added to trigger individual animation on scroll
            whileHover={{ scale: 1.05 }} // Add hover interactivity
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            custom={2} // Add custom for stagger
          >
            <img
              className="h-20"
              src={FeedbackSVG}
              alt="carbon-business-metrics"
            />
            <p className="font-bold text-xl">100%</p>
            <p>Positive Feedback</p>
          </motion.li>
        </motion.ul>
      </section>
      <section className="bg-[url('assets/images/clock.webp')] bg-cover bg-center">
        <div className="bg-blue-800/30 py-10 md:py-20">
          <motion.div
            className="mx-auto max-w-4xl flex flex-col items-center justify-center text-white text-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={heroContentVariants}
          >
            <motion.p
              className="text-base md:text-3xl mb-10 leading-relaxed"
              variants={heroItemVariants}
            >
              “ We help hardware start-ups integrate technology, scale and
              desirability without compromise ”
            </motion.p>
            <motion.button
              className="px-6 py-2 bg-white rounded-lg text-black font-semibold shadow-xl"
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
};

export default About;
