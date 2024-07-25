import React from 'react';

const Welcome = () => {
  return (
    <section className='p-6 md:p-10 lg:p-20'>
      {/* Container for columns */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Column 1 */}
        <div className="lg:col-span-2 flex justify-center items-center">
          <img 
            src="/ats_website/svg1.svg" 
            alt="Me" 
            className="object-cover w-full h-auto" 
          />
        </div>

        {/* Column 2 */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-4">
          <p className="text-2xl font-bold">Introductory Terminologies</p>
          <p>
            What is coding? It is the process of translating human-readable instructions into a machine-executable format, typically using a programming language, to instruct computers to perform specific tasks or functions.
          </p>
          <p>
            What is programming? It encompasses the entire process of developing software, which includes designing, planning, coding, testing, debugging, and maintaining software applications. It involves the higher-level tasks of architectural design, problem-solving, and algorithm development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
