const About = () => {
  return (
    <>
      <section>
        <div className="p-44 flex justify-center items-center bg-[url('assets/images/city_image.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-5xl text-white font-bold">About us</h1>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="py-24">
          <p className="max-w-3xl mx-auto text-center text-blue-600 leading-loose">
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
        <a href="/contact" className=" text-white max-w-3xl flex items-center ">
          <div className="bg-blue-600  hover:bg-blue-700 px-8 py-4 text-xl font-semibold">
            Contact us
          </div>
          <span className="flex justify-center items-center text-white text-center w-full h-full bg-blue-400 hover:bg-blue-500 transition duration-300 ease-in-out text-2xl font-bold leading-none">
            &rarr;
          </span>
        </a>
      </section>
    </>
  );
};

export default About;
