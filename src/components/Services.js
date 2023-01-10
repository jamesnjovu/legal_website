
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from './icons'
const Services = () => {
    const supportLinks = [
        {
            name: 'CORPORATE AND BUSINESS LAW',
            href: '#',
            description:
                'Chalwe & Kabalata Legal Practitioners, PA maintains a broad-based corporate practice focused on delivering sophisticated solutions for businesses at all stages of development.',
            icon: PhoneIcon,
        },
        {
            name: 'IMMIGRATION LAW',
            href: '#',
            description:
                "Moving in a new country is once of a lifetime adventure. Chalwe & Kabalata Legal Practitioners, P.A provides individuals, small businesses, and corporations with the latest and the most suitable immigration strategies. You tell us where, when and why. We'll tell you how.",
            icon: LifebuoyIcon,
        },
        {
            name: 'REAL ESTATE LAW',
            href: '#',
            description:
                'Buying or selling a home or commercial property can be an exciting experience as well as a sound investment. Sorting through the complicated contractual and procedural matters relating to real estate transactions can be complex and daunted. Chalwe & Kabalata Legal Practitioners, PA provides efficient and comprehensive guidance throughout the life of your real estate transaction.',
            icon: NewspaperIcon,
        },
    ]

    return (
        <section
            className="relative z-10 mx-auto -mt-32 max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8"
            aria-labelledby="contact-heading"
        >
            <h2 className="sr-only" id="contact-heading">
                Contact us
            </h2>
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {supportLinks.map((link) => (
                    <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                        <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                            <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-blue-600 p-5 shadow-lg">
                                <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-medium text-blue-gray-900">{link.name}</h3>
                            <p className="mt-4 text-base text-blue-gray-500">{link.description}</p>
                        </div>
                        <div className="rounded-bl-2xl rounded-br-2xl bg-blue-gray-50 p-6 md:px-8">
                            <a href={link.href} className="text-base font-medium text-blue-700 hover:text-blue-600">
                                Contact us
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;
