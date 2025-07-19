import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.jpg";
import oilExplorationImg from "../assets/images/oil-exploration.jpg";
import oilRefiningImg from "../assets/images/oil-refining.png";
import clockImg from "../assets/images/clock.jpg";

import {
  fadeInAnimationVariants,
  fadeInFromLeft,
  fadeInFromRight,
  heroContentVariants,
  heroItemVariants,
} from "../animations";

const Service = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="p-44 flex justify-center items-center bg-black/60">
          <h1 className="text-5xl text-white font-bold">Services</h1>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-20 px-4 ">
        <div className="max-w-6xl text-blue-900 p-16 bg-white p- mt-[-150px] rounded-xl">
          <motion.h2
            className="text-3xl font-bold mb-8"
            variants={heroItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            Beton REFINERY
          </motion.h2>
          <motion.p
            className="leading-loose text-lg"
            variants={heroItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            Beton REFINERY carries out exploration works with the purpose of
            expanding the resource base. Exploration activities have been
            consistently delivering good results driven by the advanced
            exploration techniques and selection of the most promising areas
            based on research results. To increase the success of exploration
            drilling, step-by-step implementation of advanced technologies for
            processing and interpreting seismic data continued. In particular,
            innovative approaches to account for in homogeneities of the upper
            part of the column are used to minimize the forecast error for
            structures. At the design stage, finite-difference modelling of the
            wave field is carried out to select the optimal parameters of the
            seismic survey.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimationVariants}
        >
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between"
            custom={0}
            variants={fadeInAnimationVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={oilExplorationImg}
              alt="Oil Production"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Oil Production
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Beton REFINERY carries out exploration works with the purpose of
              expanding the resource base. Exploration activities have been
              consistently delivering good results driven by advanced
              exploration techniques and...
            </p>
            <motion.a
              href="#"
              className="mt-4 text-orange-500 flex items-center"
              whileHover={{ x: 5, color: "#FF8C00" }}
              transition={{ duration: 0.2 }}
            >
              Learn More <span className="ml-1">&rarr;</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between"
            custom={1}
            variants={fadeInAnimationVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={oilRefiningImg}
              alt="Oil Refining"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Oil Refining
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Beton Refinery is among one of the largest petrochemical company
              in Kazakhstan and the world's largest public oil and gas Company
              in terms o...
            </p>
            <motion.a
              href="#"
              className="mt-4 text-orange-500 flex items-center"
              whileHover={{ x: 5, color: "#FF8C00" }}
              transition={{ duration: 0.2 }}
            >
              Learn More <span className="ml-1">&rarr;</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[url('assets/images/clock.jpg')] bg-cover bg-center">
        <div className="bg-blue-800/30 py-20">
          <motion.div
            className="mx-auto max-w-4xl flex flex-col items-center justify-center text-white text-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={heroContentVariants}
          >
            <motion.p
              className="text-lg md:text-3xl mb-10 leading-relaxed"
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

export default Service;
