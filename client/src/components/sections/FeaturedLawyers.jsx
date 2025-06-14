import { useState } from 'react';
import { FaCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionWrapper from '../ui/SectionWrapper';
import { featuredLawyers } from '../../data/team';
import Card from '../ui/Card';

const Team = () => {
  const cardsToShow = 3;
  const total = featuredLawyers.length;
  const maxIndex = total - cardsToShow;

  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => prev >= maxIndex ? 0 : prev + 1);
  };

  const prev = () => {
     setStartIndex((prev) => prev <= 0 ? maxIndex : prev - 1);
  };

  // how far to shift
  const shiftPct = (100 / cardsToShow) * startIndex;

  return (
    <SectionWrapper id="our-lawyers" bgColor="bg-gray-50">
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Prev / Next */}
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-indigo-700 p-2 rounded-full shadow hover:bg-indigo-900 cursor-pointer disabled:opacity-40"
        >
          <FaChevronLeft className='text-white'/>
        </button>
        <button
          onClick={next}
          disabled={startIndex === maxIndex}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-indigo-700 p-2 rounded-full shadow hover:bg-indigo-900 cursor-pointer disabled:opacity-40"
        >
          <FaChevronRight className='text-white'/>
        </button>

        {/* sliding track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${shiftPct}%)` }}
        >
          {featuredLawyers.map((lawyer, idx) => (
            <div key={idx} className="flex-none w-1/3 px-3">
              <Card>
                <div className="relative">
                  <img
                    src={lawyer.image}
                    alt={`Photo of ${lawyer.name}`}
                    className="w-full h-60 object-cover"
                  />
                  {lawyer.available && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      Available Today
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-900 cursor-pointer hover:underline transition duration-300">
                    {lawyer.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{lawyer.specialty}</p>
                  <div className="inline-flex flex-col items-start gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                      {lawyer.experience}
                    </span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                      {lawyer.focusArea}
                    </span>
                  </div>
                  <button className="w-full bg-indigo-900 text-white flex items-center cursor-pointer justify-center gap-2 py-2 rounded-md hover:bg-indigo-800 transition duration-300">
                    <FaCalendar className="text-sm" /> Book Consultation
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-white border-2 cursor-pointer border-indigo-900 text-indigo-900 font-bold rounded-lg hover:bg-indigo-900 hover:text-white transition duration-300">
          Meet Our Full Team
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Team;