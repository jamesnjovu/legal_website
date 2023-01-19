import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '../icons'
import { HeadingHeader } from '../Heading'
import photo from '../../assets/img/count_hammer.jpg'

function Header() {

  const navigation = [
    { name: 'Home', href: '#header' },
    { name: 'Location', href: '#location' },
    { name: 'About Us', href: '#about_us' },
    { name: 'Contact Us', href: '#contact_us' },
  ]
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="#header" className="relative bg-blue-gray-800 pb-36">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={photo}
          alt=""
        />
        <div className="absolute inset-0 bg-blue-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <Popover as="div" className="relative z-10">
        <nav
          className=" relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 pb-2 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center">
              <a href="#" className="font-bold mr-auto tracking-tight text-white text-4xl">
                <span className="sr-only">Chalwe & Kabalata</span>
                Chalwe & Kabalata
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-blue-gray-900 bg-opacity-0 p-2 text-white hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <a key={item.name} href={item.href}
                  onClick={() => handleClickScroll(item.href)}
                  className="text-base font-medium text-white hover:text-blue-100">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <div className="font-bold text-4xl h-8 w-auto">
                    Chalwe & Kabalata
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-gray-400 hover:bg-blue-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleClickScroll(item.href)}
                      className="block rounded-md px-3 py-2 text-base font-medium text-blue-gray-900 hover:bg-blue-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <HeadingHeader />
    </header>
  )
}
export default Header;