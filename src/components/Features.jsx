/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, ClockIcon, ScaleIcon, UploadIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Intuitive Curation',
    description:
      'Easily curate and organize your most treasured memories with our intuitive digital time capsule interface. Drag-and-drop functionality, customizable tags, and seamless categorization make preserving your moments a breeze.',
    icon: UploadIcon,
  },
  {
    name: 'Time-locked Security',
    description:
      'Ensure the longevity and privacy of your digital time capsule with our advanced time-locked security feature. Choose specific dates or milestones for your capsule to unlock, creating a truly suspenseful and meaningful experience for both you and future generations.',
    icon: ClockIcon,
  },
  {
    name: 'Generational Sharing',
    description:
      'Foster connections across generations by effortlessly sharing your curated time capsule with family and friends. Our platform enables seamless collaboration, allowing loved ones to contribute their own memories, creating a collective digital legacy for everyone to enjoy and pass down.',
    icon: GlobeAltIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-one text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
