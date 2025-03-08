import React from 'react';
// import logo from "../Header/images/Group 2.svg"
import "./Footer.css"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FavLogo from '../UI/Favlogo/FavLogo';

function Footer() {
  const { t } = useTranslation();
  return (
    <div style={{backgroundColor:"#000829", color:"white"}}>
    <footer className="p-4 sm:p-6 container">
      <div>
        <div className="flex items-center">
            <Link to={"/"}>
              <FavLogo height="h-full" weight="w-full" />
            </Link>
          </div>
        <div className="md:flex md:justify-between my-4 gap-4">
          <div className="mb-6 md:mb-0">
          <div className='footerDesc'>
          <h3 className='text-base lg:text-2xl'>{t('footer.title')}</h3>
          <p className='text-xs mb-4' dangerouslySetInnerHTML={{ __html: t('footer.description') }} />

            <div style={{color:"#28BB76"}} className="sm:flex sm:items-center sm:justify-start mb-4">
          <span className="flex items-center gap-1 text-sm sm:text-center">
          <span dir='ltr'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
            <path id="Vector" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#28BB76"/>
            </g>
          </svg>
          </span>
          <span dir='ltr'>+968 9620 1040</span>
          </span>
            </div>
            <div className="sm:flex sm:items-center sm:justify-start mt-4">
              <div className='flex items-center gap-4'>
                <div className='bg-[#28BB76] flex items-center justify-center p-2 rounded-2xl'>
                  <a href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#000829"/>
                  </svg>
                  </a>
                </div>
                <div className='bg-[#28BB76] flex items-center justify-center p-2 rounded-2xl'>
                  <a href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.0286 2.00123C13.7583 1.99843 14.488 2.00576 15.2176 2.02323L15.4116 2.03023C15.6356 2.03823 15.8566 2.04823 16.1236 2.06023C17.1876 2.11023 17.9136 2.27823 18.5506 2.52523C19.2106 2.77923 19.7666 3.12323 20.3226 3.67923C20.831 4.17884 21.2244 4.78318 21.4756 5.45023C21.7226 6.08723 21.8906 6.81423 21.9406 7.87823C21.9526 8.14423 21.9626 8.36623 21.9706 8.59023L21.9766 8.78423C21.9943 9.51342 22.002 10.2428 21.9996 10.9722L22.0006 11.7182V13.0282C22.003 13.758 21.9954 14.4877 21.9776 15.2172L21.9716 15.4112C21.9636 15.6352 21.9536 15.8562 21.9416 16.1232C21.8916 17.1872 21.7216 17.9132 21.4756 18.5502C21.2252 19.218 20.8317 19.8228 20.3226 20.3222C19.8225 20.8306 19.2179 21.224 18.5506 21.4752C17.9136 21.7222 17.1876 21.8902 16.1236 21.9402C15.8566 21.9522 15.6356 21.9622 15.4116 21.9702L15.2176 21.9762C14.4881 21.994 13.7583 22.0017 13.0286 21.9992L12.2826 22.0002H10.9736C10.2438 22.0027 9.5141 21.995 8.78458 21.9772L8.59058 21.9712C8.35319 21.9626 8.11585 21.9526 7.87858 21.9412C6.81458 21.8912 6.08858 21.7212 5.45058 21.4752C4.78326 21.2246 4.17881 20.8311 3.67958 20.3222C3.17062 19.8225 2.7768 19.2178 2.52558 18.5502C2.27858 17.9132 2.11058 17.1872 2.06058 16.1232C2.04944 15.8859 2.03944 15.6486 2.03058 15.4112L2.02558 15.2172C2.00714 14.4877 1.99881 13.758 2.00058 13.0282V10.9722C1.99779 10.2428 2.00512 9.51343 2.02258 8.78423L2.02958 8.59023C2.03758 8.36623 2.04758 8.14423 2.05958 7.87823C2.10958 6.81323 2.27758 6.08823 2.52458 5.45023C2.77595 4.78285 3.17054 4.17868 3.68058 3.68023C4.17947 3.17098 4.78354 2.7768 5.45058 2.52523C6.08858 2.27823 6.81358 2.11023 7.87858 2.06023L8.59058 2.03023L8.78458 2.02523C9.51376 2.0068 10.2432 1.99847 10.9726 2.00023L13.0286 2.00123ZM12.0006 7.00123C11.3381 6.99186 10.6803 7.11425 10.0656 7.3613C9.45077 7.60834 8.89122 7.97511 8.41942 8.44029C7.94762 8.90546 7.57298 9.45977 7.31726 10.071C7.06155 10.6822 6.92987 11.3382 6.92987 12.0007C6.92987 12.6633 7.06155 13.3192 7.31726 13.9305C7.57298 14.5417 7.94762 15.096 8.41942 15.5612C8.89122 16.0264 9.45077 16.3931 10.0656 16.6402C10.6803 16.8872 11.3381 17.0096 12.0006 17.0002C13.3267 17.0002 14.5984 16.4734 15.5361 15.5358C16.4738 14.5981 17.0006 13.3263 17.0006 12.0002C17.0006 10.6741 16.4738 9.40238 15.5361 8.4647C14.5984 7.52702 13.3267 7.00123 12.0006 7.00123ZM12.0006 9.00123C12.3991 8.99389 12.7951 9.06603 13.1654 9.21344C13.5357 9.36085 13.8729 9.58057 14.1574 9.85978C14.4418 10.139 14.6678 10.4721 14.822 10.8396C14.9763 11.2071 15.0558 11.6016 15.0558 12.0002C15.0559 12.3988 14.9766 12.7934 14.8224 13.1609C14.6683 13.5285 14.4424 13.8617 14.1581 14.141C13.8737 14.4203 13.5366 14.6401 13.1663 14.7876C12.796 14.9352 12.4001 15.0074 12.0016 15.0002C11.2059 15.0002 10.4429 14.6842 9.88026 14.1216C9.31765 13.5589 9.00158 12.7959 9.00158 12.0002C9.00158 11.2046 9.31765 10.4415 9.88026 9.87891C10.4429 9.3163 11.2059 9.00023 12.0016 9.00023L12.0006 9.00123ZM17.2506 5.50123C16.928 5.51414 16.6229 5.65138 16.3992 5.8842C16.1755 6.11702 16.0506 6.42737 16.0506 6.75023C16.0506 7.0731 16.1755 7.38344 16.3992 7.61626C16.6229 7.84908 16.928 7.98632 17.2506 7.99923C17.5821 7.99923 17.9 7.86754 18.1345 7.63311C18.3689 7.39869 18.5006 7.08075 18.5006 6.74923C18.5006 6.41771 18.3689 6.09977 18.1345 5.86535C17.9 5.63093 17.5821 5.49923 17.2506 5.49923V5.50123Z" fill="#000829"/>
                  </svg>
                  </a>
                </div>
                <div className='bg-[#28BB76] flex items-center justify-center p-2 rounded-2xl'>
                  <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.001 2C17.524 2 22.001 6.477 22.001 12C22.001 17.523 17.524 22 12.001 22C10.2338 22.0029 8.49765 21.5352 6.97099 20.645L2.00499 22L3.35699 17.032C2.46608 15.5049 1.99804 13.768 2.00099 12C2.00099 6.477 6.47799 2 12.001 2ZM8.59299 7.3L8.39299 7.308C8.26351 7.31589 8.13697 7.3499 8.02099 7.408C7.91251 7.46943 7.81349 7.54622 7.72699 7.636C7.60699 7.749 7.53899 7.847 7.46599 7.942C7.09611 8.4229 6.89696 9.01331 6.89999 9.62C6.90199 10.11 7.02999 10.587 7.22999 11.033C7.63899 11.935 8.31199 12.89 9.19999 13.775C9.41399 13.988 9.62399 14.202 9.84999 14.401C10.9534 15.3725 12.2682 16.073 13.69 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1052 16.506 15.3896 16.4271 15.647 16.29C15.7779 16.2225 15.9057 16.1491 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.723 13.137C14.6673 13.1127 14.6077 13.0988 14.547 13.096C14.4786 13.089 14.4094 13.0967 14.3442 13.1186C14.279 13.1405 14.2193 13.1761 14.169 13.223C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2753 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9408 14.2665 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.11C11.9891 13.8595 11.4577 13.5211 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88871 11.958 9.60499 11.493L9.54599 11.398C9.50361 11.3342 9.46935 11.2653 9.44399 11.193C9.40599 11.046 9.50499 10.928 9.50499 10.928C9.50499 10.928 9.74799 10.662 9.86099 10.518C9.97099 10.378 10.064 10.242 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93699 8.925 9.64699 8.244 9.34899 7.568C9.28999 7.434 9.11499 7.338 8.95599 7.319C8.90199 7.313 8.84799 7.307 8.79399 7.303C8.6597 7.29633 8.52513 7.29766 8.39099 7.307L8.59199 7.299L8.59299 7.3Z" fill="#000829"/>
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="footerItems grid text-white grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3 grid-rows-2 lg:grid-rows-1">
            <div className=''>
              <h2 className="mb-6 text-sm font-semibold uppercase">{t('footer.Services')}</h2>
              <ul className="text-white m-0 p-0">
              
                <li className="mb-4">
                  <Link to={"/nepali-srilankan-housemaids"}>Maids</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/house-maid-services"}>Nurses</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/house-maid-services"}>Barista</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/house-maid-services"}>Waitress</Link>
                </li>
                <li className="mb-4">
                  <Link to={"/house-maid-services"}>Drivers</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className=''>
              <h2 className="mb-6 text-sm font-semibold uppercase">{t('footer.followUsTitle')}</h2>
              <ul className="m-0 p-0">
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href='https://instagram.com/al.ghawalimanpower?igshid=MzRlODBiNWFlZA=='>Instagram</a>
                </li>
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href="https://twitter.com/alghawaliman" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/company/alghawalimanpower/?viewAsMember=true" className="hover:underline">LinkedIn</a>
                </li>
                <li className="mb-4">
                  <a rel="noopener noreferrer" target='_blank' href="https://web.facebook.com/profile.php?id=61550262875345" className="hover:underline">Facebook</a>
                </li>
                {/* <li style={{color:'#28BB76'}} className="mb-4">
                <span className="flex items-center gap-1 text-sm">
                  <span dir='ltr'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                    <path id="Vector" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#28BB76"/>
                    </g>
                  </svg>
                  </span>
                  <span dir='ltr'>+968 9620 1040</span>
                  </span>
                </li>
                <li style={{color:'#28BB76'}}>
                <span className="flex items-center gap-1 text-sm">
                  <span dir='ltr'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                    <path id="Vector" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#28BB76"/>
                    </g>
                  </svg>
                  </span>
                  <span dir='ltr'>info@alghawalimanpower.com</span>
                  </span>
                </li> */}
              </ul>
            </div>
            <div className=''>
              <h2 className="mb-6 text-sm font-semibold uppercase">{t('footer.legalTitle')}</h2>
              <ul className="m-0 p-0">
                <li className="mb-4">
                <Link to={"/privacy-policy"}>{t('footer.privacyPolicy')}</Link>
                </li>
                <li>
                <Link to={"/terms-conditions"}>{t('footer.termsAndConditions')}</Link>
                </li>
              </ul>
            </div>
            {/* <div className='instaPostsGrid'>
              <h2 className="mb-6 text-sm font-semibold uppercase">Our Instagram Posts</h2>
              <ul className="m-0 p-0">
                <li className="mb-4">
                  <div className='grid grid-cols-3 grid-rows-3 w-max gap-2'>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                    <div className='instaGridBox w-[5.5rem] h-[5.5rem] bg-[#8C979C] rounded-lg'></div>
                  </div>
                </li>
              </ul>
            </div> */}
            
          </div>
        </div>
        
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center text-center sm:justify-center">
          <span className="text-sm sm:text-center">
          {t('footer.copyright')}
          </span>
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default Footer;
