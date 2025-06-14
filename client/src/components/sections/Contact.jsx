import React from 'react';
import { FaBuilding, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import SectionWrapper from '../ui/SectionWrapper';

const Contact = () => {
  return (
    <SectionWrapper id="contact" bgColor="bg-indigo-50">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent" />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent">
                  <option value="">Select a service</option>
                  <option value="litigation">Litigation & Dispute Resolution</option>
                  <option value="corporate">Corporate & Commercial Law</option>
                  <option value="real-estate">Real Estate & Conveyancing</option>
                  <option value="family">Family Law</option>
                  <option value="ip">Intellectual Property</option>
                  <option value="tax">Tax & Financial Services</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="lg:w-1/2 space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6">Our Offices</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <FaBuilding className="text-indigo-900" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 mb-2">Nairobi Headquarters</h4>
                  <p className="text-gray-700">Wakili Towers, 5th Floor<br />Moi Avenue, Nairobi<br />P.O Box 12345-00100, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <FaBuilding className="text-indigo-900" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 mb-2">Mombasa Branch</h4>
                  <p className="text-gray-700">Nyali Business Centre, 3rd Floor<br />Links Road, Nyali<br />P.O Box 9876-80100, Mombasa, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <FaPhoneAlt className="text-indigo-900" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 mb-2">Phone Numbers</h4>
                  <p className="text-gray-700">Nairobi: +254 711 111 111<br />Mombasa: +254 722 222 222<br />Emergency: +254 733 333 333</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-indigo-900" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 mb-2">Email Addresses</h4>
                  <p className="text-gray-700">General: info@wakiliadvocates.co.ke<br />Support: support@wakiliadvocates.co.ke<br />Careers: careers@wakiliadvocates.co.ke</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6">Office Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday</span>
                <span>8:30 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-bold text-indigo-900 mb-2">Emergency Contacts</h4>
              <p className="text-gray-700">For urgent legal matters outside office hours, please call our emergency line: <span className="font-bold">+254 733 333 333</span></p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;