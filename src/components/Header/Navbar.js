import { Disclosure} from '@headlessui/react'
import { XIcon as XMarkIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { VerifyTokenFrontend } from '../Authentication-components/verifyToken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import LogoIcon from './Logo';
import navOpen from "./images/tornado.svg"
import "./Navbar.css"
import { Ripple, initTE } from "tw-elements";
import { useEffect } from 'react';
initTE({ Ripple });

const isValid = VerifyTokenFrontend();



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const lang = new URLSearchParams(location.search).get('lang');
  useEffect(() => {
    if(lang) {
      localStorage.setItem('lang', lang)
      const selectedLanguage = localStorage.getItem('lang')
      i18n.changeLanguage(selectedLanguage);
    }
  }, [i18n, lang])
  
  const handleLanguageChange = (e) => {
    const selectedLanguageInput = e.target.value;
    localStorage.setItem('lang', selectedLanguageInput)
    const selectedLanguage = localStorage.getItem('lang')
    i18n.changeLanguage(selectedLanguage);

  };


  const navigation = [
    { name: t("navbar.menuItems.home"), href: "/", current: false },
    { name: t("navbar.menuItems.aboutUs"), href: "/oman-nepali-housemaid", current: false },
    { name: t("navbar.menuItems.services"), href: "/house-maid-services", current: false },
    { name: t("navbar.menuItems.blog"), href: "/nepali-maids-muscat", current: false },
  ];
  const rightNavigation = [
    { name: "English", icon: "downArrow", href: "", current: false, dropDown: true }
  ];
  
  if (isValid) {
    rightNavigation.push({ name: t("navbar.menuItems.logout"), href: "/", loginBtn: true });
  } else {
    rightNavigation.push(
      // { name: t("navbar.menuItems.signup"), href: "/nepali-housekeeper", signupBtn: true },
      // { name: t("navbar.menuItems.login"), href: "/maids-login", loginBtn: true }
    );
  }
  
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('phonenoofuser');
    console.log("logout");
    window.location.href = '/';
  };
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="navBar py-3">
          {({ open }) => (
            <>
              <div className="mx-auto container">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex-shrink-0">
                    <Link to="/" className='h-16 w-20'>
                    <LogoIcon height="h-full" width="w-full" />
                    </Link>
                      
                    </div>
                    <div className="hidden lg:block">
                      <div className="navitemsrtl ml-10 flex items-baseline space-x-1">
                        {navigation.map((item) => (
                          <Link
                          key={item.name}
                          to={item.href}
                          onClick={item.name === t("navbar.menuItems.logout") ? handleLogout : undefined}
                          className={classNames(
                            item.current ? 'navItemTxt bg-white transition-all px-8' : 'text-[#434146] hover:text-[#262F32] active:text-[#262F32]',
                            'rounded-md px-4 py-2 text-sm font-normal hover:font-semibold active:font-bold transition-all'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                        ))}
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="navitemsrtl ml-10 flex items-baseline space-x-1">
                      {rightNavigation.map((item) => (
                      <div key={item.name} className="relative inline-block">
                        <Link
                          to={item.href}
                          onClick={item.name === t("navbar.menuItems.logout") ? handleLogout : undefined}
                          className={classNames(
                            item.signupBtn ? 'signupItemTxt transition-all py-3 px-8' : item.loginBtn ? 'loginItemTxt transition-all py-3 px-8' : 'text-[#434146] hover:text-[#262F32]',
                            'rounded-md py-2 text-sm font-medium transition-all'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <span className=''>{item.dropDown && <select className='bg-transparent outline-none mr-2' onChange={handleLanguageChange}
                            value={i18n.language}>
                              <option value="en">{t('upperHeader.language.english')}</option>
                              <option value="ar">{t('upperHeader.language.arabic')}</option>
                            </select>}
                          <span className=''>{item.name !== "English" ? item.name : ""}</span>
                          {item.icon === 'downArrow' && <FontAwesomeIcon icon={faAngleDoubleDown} />}
                          </span>
                        </Link>
                      </div>
                      ))}


                      </div>
                    </div>
                  </div>
                  
                  <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center  p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <div>
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        </div>
                        
                      ) : (
                        <div>
                        <span className='navIcon block h-6 w-6'><img src={navOpen} alt='Navbar Icon'></img></span>
                        </div>

                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel
               className="scale-up-hor-right lg:hidden fixed overflow-x-hidden z-50 top-0 right-0 w-full h-screen" style={{background:"#F2F5FF"}}>
                <div className="h-full flex flex-col justify-start container">
                <Disclosure.Button className="relative inline-flex items-center justify-end mt-4  p-2 text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <div>
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        </div>
                        
                      ) : (
                        <div>
                        <span className='navIcon block h-6 w-6'><img src={navOpen} alt='Navbar Icon'></img></span>
                        {/* <Bars3Icon className="block h-6 w-6" aria-hidden="true" /> */}
                        </div>

                      )}
                    </Disclosure.Button>
                  <nav className="space-y-4 text-start">
                    {navigation.map((item) => (
                      <div className='container' style={{borderBottom:".12px solid lightgrey"}}>
                        <Link
                          key={item.name}
                          to={item.href}
                          style={{ textDecoration: "none" }}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                            "block py-4 px-2 text-xl font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      </div>
                      
                    ))}
                    {rightNavigation.map((item) => (
                      <div className='container' style={{borderBottom:".12px solid lightgrey"}}>
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={item.name === t("navbar.menuItems.logout") ? handleLogout : undefined}
                          style={{ textDecoration: "none" }}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                            "block py-4 px-2 text-xl font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <span className=''>{item.dropDown && <select className='bg-transparent outline-none mr-2' onChange={handleLanguageChange}
                            value={i18n.language}>
                              <option value="en">{t('upperHeader.language.english')}</option>
                              <option value="ar">{t('upperHeader.language.arabic')}</option>
                            </select>}
                          <span className=''>{item.name !== "English" ? item.name : ""}</span>
                          {item.icon === 'downArrow' && <FontAwesomeIcon icon={faAngleDoubleDown} />}
                          </span>
                        </Link>
                      </div>
                      
                    ))}
                  </nav>
                </div>
            </Disclosure.Panel>

            </>
          )}
        </Disclosure>

        
      </div>
    </>
  )
}