const Contact = () => {
  return (
    <>
      <section className="flex flex-col mb-36">
        {/* Partnership Header Section */}
        <div
          className={`py-24 md:py-42 relative flex items-center justify-center`}
        >
          {/* Blurred background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-[url('assets/images/contact_hero.webp')] filter blur-[2px]"
            aria-hidden="true"
          ></div>
          <div className="relative flex items-center justify-center">
            <h1 className="text-center text-white text-3xl md:text-4xl font-bold">
              Contact
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center mx-auto px-4">
        <div className="flex gap-4 h-24">
          <div className="bg-blue-500 px-5 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.74 21 3 13.26 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.47.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 justify-center text-blue-900 ">
            <p>Phone</p>
            <p className="font-bold">+7 (775) 614 33 33</p>
          </div>
        </div>

        <div className="flex gap-4 h-24">
          <div className="bg-blue-800  px-5 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 justify-center text-blue-900 ">
            <p>Address</p>
            <p className="font-bold">Астана, ул. Сатпаева 1, 355.</p>
          </div>
        </div>
        <div className="flex gap-4 h-24">
          <div className="bg-blue-500  px-5 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 justify-center text-blue-900 ">
            <p>Email</p>
            <p className="font-bold">dostavka@beton.com.kz</p>
          </div>
        </div>
      </section>
      <section className="w-full mt-16 mb-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.082265245896!2d71.46844619082722!3d51.14383406432203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245815db3718a37%3A0x5aebb58a631e6473!2sQanysh%20Satbaev%20St%201%2C%20Astana%20020000%2C%20Kazakhstan!5e0!3m2!1sen!2sng!4v1753194723206!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map of Астана, ул. Сатпаева 1, 355."
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
