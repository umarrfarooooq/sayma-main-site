import { Disclosure} from '@headlessui/react'
import { MenuIcon as Bars3Icon, XIcon as XMarkIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { VerifyTokenFrontend } from '../Authentication-components/verifyToken';
import UpperHeader  from './UpperHeader';
import logo from "./images/Group 2.svg"
import "./Navbar.css"
import { Ripple, initTE } from "tw-elements";
initTE({ Ripple });

const isValid = VerifyTokenFrontend();



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  const { t } = useTranslation();
  const navigation = [
    { name: t("navbar.menuItems.home"), href: "/", current: false },
    { name: t("navbar.menuItems.aboutUs"), href: "/about", current: false },
    { name: t("navbar.menuItems.services"), href: "/services", current: false },
    { name: t("navbar.menuItems.blog"), href: "/blog", current: false },
    { name: t("navbar.menuItems.contactUs"), href: "/contact", current: false },
  ];
  


  navigation.push({name: isValid ? t("navbar.menuItems.logout") : t("navbar.menuItems.login"), href: isValid ? "/" : "/login", current:"true"})
  
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('phonenoofuser');
    console.log("logout");
    window.location.href = '/';
  };
  return (
    <>
      <UpperHeader />
      <div className="min-h-full">
        <Disclosure as="nav" className="navBar py-3">
          {({ open }) => (
            <>
              <div className="mx-auto container">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex-shrink-0">
                    <Link to="/">
                    <img
                        className="h-16 w-20"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                      
                    </div>
                    <div className="hidden md:block">
                      <div className="navitemsrtl ml-10 flex items-baseline space-x-1">
                        {navigation.map((item) => (
                          <Link
                          key={item.name}
                          to={item.href}
                          onClick={item.name === t("navbar.menuItems.logout") ? handleLogout : undefined}
                          className={classNames(
                            item.current ? 'navItemTxt bg-white transition-all px-8' : 'text-gray-300 hover:text-white',
                            'rounded-md px-4 py-2 text-sm font-medium transition-all'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        style={{textDecoration:"none"}}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                      {item.name}
                    </Link>
                    
                  ))}
                </div>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        
      </div>
    </>
  )
}