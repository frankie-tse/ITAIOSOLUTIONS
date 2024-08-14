import React from 'react';
import { Helmet } from 'react-helmet-async';
import GetStarted from './GetStarted';

const ApproachSection = () => {
  return (
    <section className="py-10 bg-white w-full">
      <Helmet>
        <title>Our Approach - IT AIO Solutions</title>
        <meta name="description" content="Learn more about our approach to every project at IT AIO Solutions. We evaluate, propose, and execute the best solutions for your IT needs." />
      </Helmet>
      <div className="w-full px-0">
        <h3 className="text-center text-4xl font-bold mb-10">Our Approach To Every Project</h3>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 flex">
            <div className="bg-gray-100 p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 flex-grow flex flex-col justify-between">
              <div>
                <h4 className="text-2xl text-gray-600 mb-4">01</h4>
                <h4 className="text-2xl font-bold mb-4">Evaluate</h4>
                <p className="text-lg text-gray-700">Thoroughly assess and analyze each project, challenge, or issue with the utmost expertise and precision.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 flex">
            <div className="bg-gray-100 p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 flex-grow flex flex-col justify-between">
              <div>
                <h4 className="text-2xl text-gray-600 mb-4">02</h4>
                <h4 className="text-2xl font-bold mb-4">Propose</h4>
                <p className="text-lg text-gray-700">Present a comprehensive range of solutions for the project, challenge, or issue, taking into account all budgetary and time constraints.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 flex">
            <div className="bg-gray-100 p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 flex-grow flex flex-col justify-between">
              <div>
                <h4 className="text-2xl text-gray-600 mb-4">03</h4>
                <h4 className="text-2xl font-bold mb-4">Execute</h4>
                <p className="text-lg text-gray-700">Our team will select and implement the most effective solution for the project, ensuring it is completed on time and within budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetStarted/>
    </section>
  );
};

export default ApproachSection;
