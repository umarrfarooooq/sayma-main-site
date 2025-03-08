import image from './imgs/2.jpg';
import image1 from './imgs/2.jpg';
import image2 from './imgs/2.jpg';
import image3 from './imgs/2.jpg';
import image4 from './imgs/2.jpg';
import image5 from './imgs/2.jpg';
import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const shownBlogs = false;

export default function BlogData() {
    const BlogData = [
        {
          image: image,
          title: 'Elevating Your Home with Trusted Maid Services',
          detail: 'Discover the benefits of our top-tier maid supply services that contribute to a harmonious and organized household.',
          more: 'View',
        },
        {
          image: image1,
          title: 'The Heart of Our Company: Exceptional Maid Professionals',
          detail: 'Meet the dedicated individuals who form the backbone of our reliable and trusted maid supply services.',
          more: 'View',
        },
        {
          image: image2,
          title: 'A Fresh Perspective on Domestic Assistance',
          detail: 'Explore the innovative approach we bring to domestic help services and how it enhances your everyday life.',
          more: 'View',
        },
        {
          image: image3,
          title: 'Creating Lasting Connections: The Sayma Man Power Experience',
          detail: 'Learn about the personal touch we add to our maid supply services, ensuring a strong and lasting partnership with your family.',
          more: 'View',
        },
        {
          image: image4,
          title: 'Empowering Homes through Skilled and Compassionate Maids',
          detail: 'Discover how our maids empower households by providing reliable and caring assistance tailored to your needs.',
          more: 'View',
        },
        {
          image: image5,
          title: 'Crafting Cleaner and Happier Homes',
          detail: 'Explore the impact of our cleaning specialists on creating a hygienic and joyful living environment for your family.',
          more: 'View',
        },
      ];

    return (
        <>
            <div className="container py-20 px-0">
            {shownBlogs ? <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">

{BlogData.map((item, index) => (

    <div className="blog bg-[#FFFBFA] hover:outline hover:outline-[#F05D22] outline-1 transition-all cursor-pointer p-6 flex flex-col items-start gap-4 relative rounded-3xl hover:shadow hover:shadow-slate-200 dark:shadow-gray-800 overflow-hidden">
    <div className='h-[13.5rem] w-full'>
      <img className='w-full h-full object-cover object-top rounded-xl' src={item.image} alt="" />
    </div>
      <div className="content mt-auto">
          <Link to="/blog-detail" className="text-base md:text-xl font-bold text-[#262F32]">{item.title}</Link>
          <p className="text-[#434146] text-sm md:text-base mt-3">{item.detail}</p>
          <div className='flex items-center justify-between mt-auto'>
            <div className='flex items-center gap-1'>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
<path d="M1.33203 7.0013C1.33203 4.4873 1.33203 3.22997 2.11336 2.4493C2.89403 1.66797 4.15136 1.66797 6.66536 1.66797H9.33203C11.846 1.66797 13.1034 1.66797 13.884 2.4493C14.6654 3.22997 14.6654 4.4873 14.6654 7.0013V8.33464C14.6654 10.8486 14.6654 12.106 13.884 12.8866C13.1034 13.668 11.846 13.668 9.33203 13.668H6.66536C4.15136 13.668 2.89403 13.668 2.11336 12.8866C1.33203 12.106 1.33203 10.8486 1.33203 8.33464V7.0013Z" stroke="#434146"/>
<path d="M4.66406 1.66797V0.667969M11.3307 1.66797V0.667969M1.66406 5.0013H14.3307" stroke="#434146" stroke-linecap="round"/>
</svg>
              </span>
              <span className='text-xs md:text-sm'>12 Jan 2024</span>
            </div>
            <div className='flex items-center gap-1'>
              <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.4987 1.83203C6.8632 1.83203 5.29468 2.48173 4.13821 3.63821C2.98173 4.79468 2.33203 6.3632 2.33203 7.9987C2.33203 9.6342 2.98173 11.2027 4.13821 12.3592C5.29468 13.5157 6.8632 14.1654 8.4987 14.1654C10.1342 14.1654 11.7027 13.5157 12.8592 12.3592C14.0157 11.2027 14.6654 9.6342 14.6654 7.9987C14.6654 6.3632 14.0157 4.79468 12.8592 3.63821C11.7027 2.48173 10.1342 1.83203 8.4987 1.83203ZM1.33203 7.9987C1.33203 4.0407 4.5407 0.832031 8.4987 0.832031C12.4567 0.832031 15.6654 4.0407 15.6654 7.9987C15.6654 11.9567 12.4567 15.1654 8.4987 15.1654C4.5407 15.1654 1.33203 11.9567 1.33203 7.9987ZM8.4987 4.83203C8.63131 4.83203 8.75848 4.88471 8.85225 4.97848C8.94602 5.07225 8.9987 5.19942 8.9987 5.33203V7.79203L10.5187 9.31203C10.5678 9.35781 10.6072 9.41301 10.6346 9.47434C10.6619 9.53567 10.6766 9.60188 10.6778 9.66902C10.6789 9.73615 10.6666 9.80284 10.6414 9.8651C10.6163 9.92735 10.5789 9.98391 10.5314 10.0314C10.4839 10.0789 10.4274 10.1163 10.3651 10.1414C10.3028 10.1666 10.2362 10.1789 10.169 10.1778C10.1019 10.1766 10.0357 10.1619 9.97434 10.1346C9.91301 10.1072 9.85781 10.0678 9.81203 10.0187L8.14536 8.35203C8.05157 8.25835 7.99881 8.13126 7.9987 7.9987V5.33203C7.9987 5.19942 8.05138 5.07225 8.14514 4.97848C8.23891 4.88471 8.36609 4.83203 8.4987 4.83203Z" fill="#434146"/>
</svg>
              </span>
              <span className='text-xs md:text-sm'>05:34 min to read</span>
            </div>
          </div>
          <div className="mt-4">
            <Link to={``}>
                <button style={{border:"1px solid #28BB76" ,fontSize:"0.75rem", color:"#28BB76"}} className="rounded-md transition-all hover:bg-[#28BB76] hover:bg-opacity-30 active:bg-opacity-50 py-2 w-full mx-auto text-center">{item.more} <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>                              
          </div>
          
      </div>
        
    </div>
))}

            </div> : <div className='text-center text-4xl font-bold'>Coming Soon</div>}
                
            </div>
        </>
    )
}
