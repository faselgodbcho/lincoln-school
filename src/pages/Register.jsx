const Register = () => {
  return (
    <main>
      <section
        id="hero"
        className="scroll-mt-40 pb-4 bg-babyBlue-bg sm:bg-light-bg min-h-screen px-4 w-full flex items-center"
      >
        <div className="text-left bg-babyBlue-bg lg:container xl:max-w-[1122px] mx-auto pb-4 max-sm:min-h-[30rem] md:h-[30rem] rounded-3xl md:rounded-[5rem] flex flex-col  justify-center gap- md:gap-4 lg:px-28 px-6 max-[380px]:px-4">
          <div className="sm:pt-10 flex justify-center items-center">
            <nav className="flex gap-4">
              <div className="rounded-full bg-primary bg-opacity-50 w-3 h-3 cursor-pointer"></div>
              <div className="rounded-full bg-primary bg-opacity-80 w-3 h-3 cursor-pointer"></div>
              <div className="rounded-full bg-primary bg-opacity-80 w-3 h-3 cursor-pointer"></div>
              <div className="rounded-full bg-primary bg-opacity-80 w-3 h-3 cursor-pointer"></div>
              <div className="rounded-full bg-primary bg-opacity-80 w-3 h-3 cursor-pointer"></div>
              <div className="rounded-full bg-primary bg-opacity-80 w-3 h-3 cursor-pointer"></div>
            </nav>
          </div>

          <div className="flex-1 gap-2 md:gap-16 flex flex-col sm:flex-row justify-center">
            <div className=" sm:w-1/2 pt-14 text-primary">
              <h1 className="font-bold text-[2rem] md:text-4xl">
                Basic Student Information
              </h1>

              <p className="pt-4 max-w-72">
                Enter your first name, middle name and last name
              </p>
            </div>

            <div className="pt-8 sm:w-1/2 flex flex-col ">
              <form className="">
                <div className="max-w-full mb-4">
                  <label htmlFor="firstName" className="block mb-2">
                    First Name
                  </label>
                  <input
                    className="block w-full py-2 rounded focus:outline-none px-7"
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>

                <div className="max-w-full mb-4">
                  <label htmlFor="middleName" className="block mb-2">
                    Middle Name
                  </label>
                  <input
                    className="block w-full py-2 rounded focus:outline-none px-7"
                    type="text"
                    id="middleName"
                    placeholder="Middle Name"
                  />
                </div>

                <div className="max-w-full mb-4">
                  <label htmlFor="lastName" className="block mb-2">
                    Last Name
                  </label>
                  <input
                    className="block w-full py-2 rounded focus:outline-none px-7"
                    type="text"
                    id="lastName"
                    placeholder="last Name"
                  />
                </div>
              </form>

              <div className="flex w-full justify-end">
                <button className="btn-primary text-sm">Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
