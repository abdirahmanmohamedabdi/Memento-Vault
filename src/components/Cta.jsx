import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'

export const Cta = () => {
  return (
    <div className="relative bg-one">
    <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1457883626133-458e5ec26948?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-base font-semibold uppercase tracking-wider text-four">Memento Vault</h2>
        <p className="mt-2 text-four text-3xl font-extrabold tracking-tight sm:text-4xl">Seal, Save, Share: Your Digital Time Capsule for Eternal Memories</p>
        <p className="mt-3 text-lg text-four">
        Start your journey through time! Curate your digital time capsule and safeguard your memories for a lifetime.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-one bg-white hover:bg-gray-50"
            >
              Learn More
              <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-one" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
