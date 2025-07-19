// import heroBg from "../assets/images/hero-bg.jpg"; // Keeping for completeness if it were used in an <img>, but it's in a Tailwind class.
import oilStorageImg from "../assets/images/oil-storage.jpg";
import oilExplorationImg from "../assets/images/oil-exploration.jpg";
import oilProductionImg from "../assets/images/oil-production.jpg";
import oilRefiningImg from "../assets/images/oil-refining.png";
import oilTerminalImg from "../assets/images/oil-terminal.jpg";
// import clockImg from "../assets/images/clock.jpg"; // Keeping for completeness if it were used in an <img>, but it's in a Tailwind class.

function Home() {
  return (
    <>
      <section className="bg-[url('assets/images/hero-bg.jpg')] bg-cover bg-center">
        <div className="bg-gradient-to-br from-blue-800/80 via-blue-800/80 via-50% to-green-700/80">
          <div className="h-[calc(100vh-50px)] gap-7 mx-48 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl font-bold">Beton Refinery</h1>
            <p className="text-left w-2/3">
              At the heart of modern industry, our oil refinery transforms crude
              oil into high-quality petroleum products. We fuel transportation,
              power industries, and enhance everyday life, all while
              prioritizing safety, environmental stewardship, and cutting-edge
              technology. We're dedicated to providing a reliable and
              sustainable energy supply for communities worldwide.
            </p>
            <div className="py-2 px-4 w-1/3 bg-blue-800 text-center border border-indigo-300">
              Get Quotes
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-18 px-6 flex flex-col gap-18 mx-20 rounded-md font-bold mt-[-150px] bg-neutral-200 shadow-xl">
          <h1 className="text-shadow-lime-900 text-4xl w-full text-center">
            Our Services
          </h1>
          <ul className="grid grid-cols-3 gap-6">
            <li>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <img
                  src={oilStorageImg}
                  alt="Oil and gas Storage"
                  className="w-full h-48 object-cover rounded-md"
                />

                <h3 className="text-2xl font-bold text-blue-800 mt-4">
                  Oil and gas Storage
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Secure and efficient storage solutions for crude oil and
                  refined petroleum products, ensuring supply chain stability
                  and operational flexibility.
                </p>
                <a
                  href="#"
                  className="mt-4 text-orange-500 flex items-center transition duration-300"
                >
                  Learn More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <img
                  src={oilExplorationImg}
                  alt="Oil exploration"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold text-blue-800 mt-4">
                  Oil Exploration
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Utilizing cutting-edge technology and geological expertise to
                  identify, assess, and develop new oil and gas reserves
                  globally.
                </p>
                <a
                  href="#"
                  className="mt-4 text-orange-500 flex items-center transition duration-300"
                >
                  Learn More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <img
                  src={oilProductionImg}
                  alt="Oil production"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold text-blue-800 mt-4">
                  Oil Production
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Responsible and efficient extraction of crude oil and natural
                  gas from diverse reservoirs, adhering to the highest safety
                  and environmental standards.
                </p>
                <a
                  href="#"
                  className="mt-4 text-orange-500 flex items-center transition duration-300"
                >
                  Learn More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <img
                  src={oilRefiningImg}
                  alt="Oil refining"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold text-blue-800 mt-4">
                  Oil Refining
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Transforming crude oil into a wide range of high-quality fuels
                  and petrochemical feedstocks using advanced refining processes
                  and technology.
                </p>
                <a
                  href="#"
                  className="mt-4 text-orange-500 flex items-center transition duration-300"
                >
                  Learn More
                  <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <img
                  src={oilTerminalImg}
                  alt="Oil and gas Terminal"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold text-blue-800 mt-4">
                  Oil and gas Terminal
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  State-of-the-art terminals for the seamless handling,
                  processing, and distribution of crude oil, refined products,
                  and natural gas to global markets.
                </p>
                <a
                  href="#"
                  className="mt-4 text-orange-500 flex items-center transition duration-300"
                >
                  Learn More
                  <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-40 pb-20">
        <h2 className="text-center text-4xl font-bold mb-16">Why Choose Us</h2>
        <div className="bg-blue-600 rounded-3xl mx-24 px-8 py-16 flex justify-center items-center gap-8">
          <div className="flex-1 text-white pr-4">
            <h3 className="text-2xl font-bold mb-6">You need Us</h3>
            <p className="mb-4">
              Beton Refinery is one of the largest petrochemical companies and a
              global leader in hydrocarbon reserves and liquid hydrocarbon
              production.
            </p>
            <p className="mb-8">
              A variety of oil products are produced at Beton Refinery. Among
              them are several kinds of motor gasoline, diesel fuel, oil fuel
              (mazout), liquefied hydrocarbon gases, vacuum gas oil, technical
              sulfur,
            </p>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow-lg">
              Get Quotes
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/56/0d/ad/560dad8fc28518c65c6ac1a358a48edc.jpg"
                alt="Workers looking at oil refinery"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/ac/43/cd/ac43cdc2b25f29db2daf418448e79296.jpg"
                alt="Man with laptop near oil pumpjack"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/52/bf/25/52bf25760c5d2084f6cde30e702cc266.jpg"
                alt="Workers reviewing documents at refinery"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/52/d3/91/52d39109e0642d40ce619821ff52cd51.jpg"
                alt="Worker in front of industrial structure"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-20">
        <div className="grid grid-cols-4 gap-6 mx-20">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col col-span-2">
            <img
              src={oilRefiningImg}
              alt="Quality Assurance in oil refining"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Quality Assurance
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Performance, dependability, and durability were used to gauge the
              quality. The most crucial factor that sets a firm apart from its
              rivals is quality.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col">
            <img
              src={oilExplorationImg}
              alt="Modern devices for oil exploration"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Modern Devices
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              TARAZ OIL REFINING LLP has made investments in cutting-edge
              machinery, including innovations, in order to gradually minimize
              energy, material, and natural resource use while maintaining
              maximum output.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col">
            <img
              src={oilTerminalImg}
              alt="Innovation in oil terminal operations"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Innovation
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              We offer integrated, comprehensive, and cost-effective solutions
              for all of your fuel, oil, and gas demands. TARAZ OIL REFINING LLP
              an organization focused on research, provides a broad range of
              energy solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col col-span-2">
            <img
              src={oilProductionImg}
              alt="Safety protocols in oil production"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">Safety</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Implementing rigorous safety protocols and continuous training to
              ensure the well-being of our workforce and protect the
              environment.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col">
            <img
              src={oilStorageImg}
              alt="Warehouse support for oil and gas storage"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Warehouse Support
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Providing comprehensive logistics and storage solutions to
              efficiently manage and distribute our diverse range of products.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col">
            <img
              src={oilRefiningImg}
              alt="Oil refining contributing to industrial economy"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Industrial Economy
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Optimizing operational efficiency and resource utilization to
              contribute to a sustainable and robust industrial economic
              landscape.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col col-span-2">
            <img
              src={oilStorageImg}
              alt="Safe chemical handling in storage facilities"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Chemical Handling
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Adhering to strict guidelines and best practices for the safe and
              secure handling, storage, and transportation of all chemicals.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gradient-to-r from-blue-400 via-blue-800 via-90% to-blue-900 p-6 rounded-lg shadow-md max-w-4xl my-24 py-24 px-14 flex flex-col items-center gap-18 mx-auto text-white">
          <h1 className="text-3xl text-gray-300/80 w-3/4 text-center">
            “We are running a project that handles chemicals safely and securely
            “.
          </h1>
          <ul className="list-disc flex gap-8 text-xl">
            <li>Safety</li>
            <li>Warehouse support</li>
            <li>Industrial Economy</li>
            <li>Chemical handling</li>
          </ul>
        </div>
      </section>
      <section className="bg-[url('assets/images/clock.jpg')] bg-cover bg-center">
        <div className="bg-blue-800/30 py-20">
          <div className="mx-auto max-w-4xl flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-lg md:text-3xl mb-10 leading-relaxed">
              “ We help hardware start-ups integrate technology, scale and
              desirability without compromise ”
            </p>
            <button className="px-6 py-2 bg-white rounded-lg text-black font-semibold shadow-xl transition duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
