"use client"

import React from 'react'
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';

const Services = () => {
  return (
    <div className="mt-12 padding-x padding-y" id="Services">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold justify-center">SERVICES</h1>
        <p className="text-2xl py-8 text-primary-blue italic">Choose below what service you want</p>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='md:col-span-1'>
          <div className="flex flex-col space-y-4">
            <Disclosure>
              <Disclosure.Button className="hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 text-lg font-semibold py-10 px-4 rounded-lg shadow-lg">
                <h1 className='text-4xl font-bold'>REQUEST</h1>
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className='bg-primary-blue py-5 px-4 rounded-lg shadow-md'>
                  <h2 className='text-3xl text-white font-semibold text-center'>PSA COPY</h2>
                  <ul className="dropdown text-2xl text-white text-center font-semibold">
                    <li className='py-5 hover:text-black'><Link href="/reqstcolb">Certificate of Live Birth </Link></li>
                    <li className='py-5 hover:text-black'><Link href="/reqstcom">Certificate of Marriage </Link></li>
                    <li className='py-5 hover:text-black'><Link href="/reqstcod">Certificate of Death </Link></li>
                    <li className='py-5 hover:text-black'><Link href="/reqstcenomar">Certificate of No Marriage </Link></li>
                    <li className='py-5 hover:text-black'><Link href="/reqstcod">Certificate of Death </Link></li>
                  </ul>
                </div>
              </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
              <Disclosure.Button className="hover:border-amber-500 hover:bg-amber-50 hover:text-amber-500 text-lg font-semibold py-10 px-4 rounded-lg shadow-lg">
                <h1 className='text-4xl font-bold'>REGISTER</h1>
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className='bg-amber-500 py-5 px-4 rounded-lg shadow-md'>
                  <ul className="dropdown text-2xl text-white text-center font-semibold">
                    <li className='py-5 hover:text-black'><Link href="/regcolb">Certificate of Live Birth </Link></li>
                    <li className='py-5 hover:text-black'><Link href="/regcod">Certificate of Death</Link></li>
                    <li className='py-5 hover:text-black'><Link href="/aml">Application of Marriage License</Link></li>
                  </ul>
                </div>
              </Disclosure.Panel>
            </Disclosure>
            <button className="hover:border-green-500 hover:bg-green-50 hover:text-green-600 text-lg font-semibold py-10 px-4 rounded-lg shadow-lg">
              <h1 className='text-4xl font-bold'><Link href="https://www.facebook.com/lcrbuenavista?mibextid=2JQ9oc">INQUIRE</Link></h1>
            </button>
          </div>
        </div>
        <div className="md:col-span-1">
          <img
            src="/services.png"
            alt="Service Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

