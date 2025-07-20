import { motion } from "framer-motion";
import productHero from "../assets/images/oil-refining.png"; // Using oil-refining.png for the hero background
import { heroItemVariants } from "../animations"; // Reusing animation variants

const Product = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${productHero})` }}
      >
        <div className="p-20 md:p-44 flex justify-center items-center bg-black/50">
          <h1 className="text-3xl md:text-5xl text-white font-bold\">
            Product
          </h1>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-20 px-4">
        <div className="max-w-4xl text-blue-900">
          <motion.h2
            className="text-4xl font-bold text-center mb-10"
            variants={heroItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            The list of services for refining of crude oil and (or) gas
            condensate
          </motion.h2>
          <motion.p
            className="mx-auto text-center text-blue-600 leading-loose text-lg"
            variants={heroItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            According to the passport of production, which was granted on 30 May
            2012, the Beton Refinery primary operation is oil refining with a
            fuel option. The company's installed capacity for oil refining,
            after modernisation and renovation, is 4,906 million tons per year.
            The loading of raw materials and assortment, as well as processed
            oil, impact the performance of each unit.
          </motion.p>
        </div>
      </section>

      <section className="bg-blue-600 py-20 px-4">
        <div className="max-w-6xl mx-auto text-white">
          <motion.h2
            className="text-2xl font-bold text-center mb-14"
            variants={heroItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Products made from several types of oil at the Beton REFINERY
          </motion.h2>
          <ul className="list-disc list-inside text-lg leading-loose px-4">
            <li>
              Motor gasolineA-80 (80 RON) TS 38.001165-2003 "Export motor
              gasoline. Technical specifications"
            </li>
            <li>
              Motor gasoline A-92 (92RON) TS 38.001165-2003 "Export motor
              gasoline. Technical Specifications"
            </li>
            <li>Quality specification</li>
            <li>
              Motor gasoline Premium 95 GOST 51105-97 "Fuels for internal
              combustion engines. Unleaded gasoline. Technical specifications"
            </li>
            <li>Quality Specification (1) • Quality specification (2)</li>
            <li>
              Motor gasoline AI-95 GOST 51105-97 "Unleaded gasoline. Technical
              specifications"
            </li>
            <li>Quality specification</li>
            <li>
              Diesel fuel L-0,2-40 GOST 305-82 "Diesel fuels. Technical
              specifications"
            </li>
            <li>Quality Specification (1) • Quality specification (2)</li>
            <li>
              Diesel fuel with the additive DzP – TS STO 11605031-021-2008
              "Winter and arctic diesel fuels with additives"
            </li>
            <li>Quality specification</li>
            <li>
              Jet fuel TS-1 GOST 10227-86 "Jet fuels. Technical specifications"
            </li>
            <li>Quality specification</li>
            <li>
              White spirit GOST 3134-78 "White spirit. Technical specifications"
            </li>
            <li>
              Domestic heating fuel TS 38.101656-2005 "Domestic heating fuel.
              Technical specifications"
            </li>
            <li>Quality specification</li>
            <li>
              Fuel oil of the brand 100 GOST 10585-99 "Oil fuel. Fuel oil.
              Technical specifications"
            </li>
            <li>Quality specification</li>
            <li>
              Vacuum gas oil of the brand A type 1 TS 381011304-2004 "Vacuum gas
              oil. Technical specifications"
            </li>
            <li>Quality specification</li>
            <li>
              Hydrocarbon gas GOST 20448-90 "Gases hydrocarbon liquefied fuel
              for communal and domestic consumption. Technical specifications"
            </li>
            <li>Quality specification</li>
            <li>
              Petroleum coke calcined KP-1, KP-2 TS 38.1011341-90 "Calcined
              petroleum cokes. Technical specifications"
            </li>
            <li>Quality specification</li>
            <li>
              Total petroleum coke for aluminum industry TS 0258-094-0151806-94
              "Total petroleum coke for aluminum industry. Technical
              specifications"
            </li>
            <li>Quality specification</li>
            <li>
              Technical gas granulated sulfur ST TOO 40319154-01-2008 "
              Technical gas granulated sulfur. Technical specifications"
            </li>
            <li>Quality specification</li>
            <li>Planned oil products:</li>
            <li>Benzene</li>
            <li>Paraxylene</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Product;
