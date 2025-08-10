import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css'
import headerImg from './assets/header.png'

function App() {

  const svgRef = useRef(null);

  useEffect(() => {
    // Check if the ref is available
    if (svgRef.current) {
      // Use GSAP to create an animation timeline
      gsap.to(svgRef.current, {
        rotation: 360,
        duration: 8,
        ease: "linear",
        repeat: -1
      });
    }
  }, []); // Empty dependency array ensures this runs once

  // Service Icons as individual components
  const GoogleIcon = () => (
    <svg className='group-hover:text-primary dark:group-hover:text-secondary transition-all text-secondary dark:text-primary fill-current md:w-12 w-8' viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9909 37.0673C9.85046 37.4282 1.30588 29.474 0.944979 19.3335C0.584075 9.19308 8.54155 0.651517 18.682 0.290613C23.276 0.127111 27.7338 1.67266 31.2385 4.64363L31.877 5.18689L26.0279 11.4677L25.4487 11.0067C23.6143 9.54604 21.3202 8.78653 18.9873 8.86956C13.5783 9.06207 9.33141 13.6191 9.52392 19.0282C9.71643 24.4373 14.2765 28.6809 19.6856 28.4884C23.5862 28.3496 26.5977 26.2474 27.9291 22.801L18.6944 23.1296L18.3997 14.8505L36.4298 14.2338L36.5866 14.863C37.6855 19.2923 37.1665 25.8837 33.5236 30.7164C30.5077 34.7168 25.9559 36.855 19.9909 37.0673Z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg className='group-hover:text-primary dark:group-hover:text-secondary transition-all text-secondary dark:text-primary fill-current md:w-12 w-8' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0C8.05909 0 0 8.10051 0 18.0925C0 27.1634 6.64773 34.6529 15.3098 35.9613V22.8879H10.8565V18.132H15.3098V14.9674C15.3098 9.72802 17.8495 7.4278 22.1817 7.4278C24.2566 7.4278 25.3538 7.58241 25.8734 7.65313V11.8045H22.9181C21.0788 11.8045 20.4365 13.5571 20.4365 15.5324V18.132H25.8267L25.0953 22.8879H20.4365V36C29.2222 34.8018 36 27.2514 36 18.0925C36 8.10051 27.9409 0 18 0Z" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg className='group-hover:text-primary dark:group-hover:text-secondary transition-all text-secondary dark:text-primary fill-current md:w-12 w-8' viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_8_78)">
        <path d="M18.5 -6.9375C13.3372 -6.9375 -0.460288 -3.7 -0.460288 -3.7L-0.47715 -3.68073C-2.82853 -3.30467 -8.3252 5.86773 -8.3252 8.325V15.725V15.7274L-4.6252 35.4255V35.4279C-4.6229 36.6014 -4.20232 37.7357 -3.43898 38.6271C-2.67563 39.5185 -1.61953 40.1086 -0.460288 40.2913L-0.455469 40.2986C-0.455469 40.2986 6.2454 41.5945 11.4081 41.5945C16.5709 41.5945 43.0126 40.2913 43.0126 40.2913L40.0309 37.0921C44.1982 38.2017 42.2487 36.3192 40.7001 33.7625C41.4641 32.8701 41.8844 31.7343 41.8857 30.5596V30.5572V23.1596V23.1572L40.7001 12.8247C40.6984 11.6508 41.4635 9.21688 40.7001 8.325C39.9367 7.43312 53.3443 4.61777 40.7001 4.625L43.0126 0.462498C43.0126 0.462498 23.6627 -6.9375 18.5 -6.9375ZM14.8 12.8247L24.6666 18.5L14.8 24.1753V12.8247Z" />
      </g>
      <defs>
        <clipPath id="clip0_8_78">
          <rect width="37" height="37" rx="18.5" />
        </clipPath>
      </defs>
    </svg>
  );

  const DataAnalyticsIcon = () => (
    <svg className='group-hover:text-primary dark:group-hover:text-secondary transition-all text-secondary dark:text-primary fill-current md:w-12 w-8' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5898 16.626C19.4614 16.626 19.9255 16.8952 19.9453 16.9072C20.0282 16.9566 20.066 17.0564 20.0361 17.1475L19.3975 19.0781C19.3781 19.1369 19.3335 19.1842 19.2754 19.207C19.2163 19.231 19.1506 19.2262 19.0957 19.1973C19.0902 19.1944 18.5522 18.9121 17.9297 18.9121C17.177 18.9121 17.0645 19.2896 17.0645 19.5146C17.0645 19.7587 17.3909 20.0005 17.7695 20.2793C18.4398 20.7733 19.3574 21.45 19.3574 22.8076C19.3573 24.5082 18.2782 25.6973 16.7334 25.6973C14.9767 25.6971 14.0924 24.6227 14.0557 24.5771C14.0131 24.5245 13.9991 24.4542 14.0186 24.3896L14.4668 22.9092C14.4875 22.8417 14.5431 22.789 14.6123 22.7695C14.6811 22.7513 14.7565 22.7665 14.8105 22.8125C14.8309 22.8301 15.6417 23.5215 16.2852 23.5215C16.6619 23.5214 16.7616 23.2251 16.7617 23.0684C16.7617 22.6622 16.4587 22.4144 16.0752 22.1016C15.5457 21.6698 14.8878 21.1321 14.8877 19.9658C14.8877 18.3576 16.0302 16.6271 18.5391 16.627C18.556 16.627 18.573 16.626 18.5898 16.626Z" />
      <path d="M18.5908 10.8301C18.6393 10.829 18.687 10.8334 18.7324 10.8428C18.8046 10.8581 18.8748 10.8894 18.9424 10.9316C18.1041 11.6349 17.4627 12.9695 17.124 13.793L16.1104 14.1162C16.8009 12.0339 17.8613 10.8468 18.5908 10.8301Z" />
      <path d="M19.4502 11.6094C19.6043 11.9612 19.7164 12.4169 19.7734 12.9453L18.1982 13.4482C18.626 12.5575 19.0668 11.9458 19.4502 11.6094Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM18.6406 10.001C17.2974 9.96524 15.8894 11.7229 15.1309 14.4287L12.7471 15.1914C12.5922 15.2412 12.4801 15.3736 12.459 15.5322L11.0039 26.6426C10.9758 26.8599 11.124 27.0608 11.3438 27.1016L21.5088 29L22.293 12.1396L21.8242 12.2891C21.5442 11.2764 21.0201 10.6397 20.3301 10.4951C20.121 10.4504 19.9186 10.4593 19.7227 10.5078C19.4875 10.2643 19.2168 10.0963 18.9082 10.0312C18.8194 10.0127 18.7302 10.0034 18.6406 10.001ZM22.3564 28.9688L27.6689 27.8154C27.8851 27.7686 28.0267 27.5657 27.9951 27.3516C27.319 22.7533 26.0361 14.0078 26.0127 13.833C26.008 13.7916 25.9974 13.7505 25.9805 13.7119C25.8977 13.5256 25.7475 13.3917 25.5479 13.3242C25.5091 13.3115 25.4627 13.3044 25.4219 13.3027C25.3274 13.2989 24.4948 13.2353 24.1406 13.208C23.8508 12.9174 23.2952 12.3614 23.1504 12.2334C23.1459 12.229 23.1403 12.2266 23.1357 12.2227L22.3564 28.9688Z" />
    </svg>
  );

  // Learn More Arrow Icon
  const ArrowIcon = () => (
    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.51172 1.27954L6.6864 6.09853L1.8674 11.2732" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );

  // The Service Card Component
  const ServiceCard = ({ title, description, icon: IconComponent }) => (
    <div className='p-4 rounded-2xl bg-secondary/10 dark:bg-primary/10 dark:text-primary text-secondary flex flex-col justify-between hover:bg-secondary/80 dark:hover:bg-primary/80 hover:text-primary dark:hover:text-secondary transform hover:-rotate-2 group transition-all'>
      <div className='flex flex-col md:gap-2 gap-1'>
        <IconComponent />
        <h3 className='md:text-2xl text-xl font-semibold'>{title}</h3>
        <p className='md:text-lg text-md'>{description}</p>
      </div>
      <a className='flex mt-10 items-center gap-2 group-hover:text-primary dark:group-hover:text-secondary dark:text-primary text-secondary transition-all stroke-current' href="">
        Learn more
        <ArrowIcon />
      </a>
    </div>
  );

  const about = `I'm Ataur Rahman Sunny, a passionate and results-driven Digital Marketing Specialist with over five years of experience helping businesses grow and scale online. My expertise lies in both Social Media Marketing and Search Engine Marketing, where I build profitable digital systems that transform cold traffic into loyal customers. I specialize in a range of services, including Facebook & Instagram Ads, Google Search & Display Ads, and Conversion Tracking & Analytics. I've had the pleasure of working with clients across various industries, from eCommerce to Real Estate, and I'm dedicated to crafting strategic, data-backed campaigns that deliver a strong return on investment. If you're looking to launch a new brand, scale your store, or optimize your ad performance, I'm here to help you build a smart and sustainable growth strategy.`;
  
  const services = [
    {
      title: 'Google Ads Management',
      description: 'Search, Display, Youtube, Performance Max campaigns.',
      icon: GoogleIcon,
    },
    {
      title: 'Facebook Ads Management',
      description: 'Audience Research, Ad Copywriting, Creative Design, A/B Testing, Retargeting.',
      icon: FacebookIcon,
    },
    {
      title: 'YouTube SEO',
      description: 'Title, Tag, Thumbnail, Description Optimization + Ranking Strategy.',
      icon: YoutubeIcon,
    },
    {
      title: 'Data Analytics',
      description: 'Website tracking, Funnel visualization, Data studio, Google Tag Manager.',
      icon: DataAnalyticsIcon,
    },
  ];

  const testimonials = [
    {
      name: 'Sojar Datta',
      title: 'Google Ads & Analytics Tracking Consultant',
      company: 'CEO, Forian Foundation LTD.',
      quote: '“Figma ipsum component variant main layer. List inspect thumbnail project object main. Flows style editor asset outline. Team align strikethrough arrange vector rectangle arrow opacity team.”',
    },
    {
      name: 'Jane Doe',
      title: 'Digital Marketing Strategist',
      company: 'CMO, Tech Solutions Inc.',
      quote: '“Figma ipsum component variant main layer. List inspect thumbnail project object main. Flows style editor asset outline. Team align strikethrough arrange vector rectangle arrow opacity team.”',
    },
    {
      name: 'John Smith',
      title: 'UX/UI Designer',
      company: 'Lead Designer, Creative Labs',
      quote: '“Figma ipsum component variant main layer. List inspect thumbnail project object main. Flows style editor asset outline. Team align strikethrough arrange vector rectangle arrow opacity team.”',
    },
    {
      name: 'Emily White',
      title: 'Full Stack Developer',
      company: 'CTO, Innovate Co.',
      quote: '“Figma ipsum component variant main layer. List inspect thumbnail project object main. Flows style editor asset outline. Team align strikethrough arrange vector rectangle arrow opacity team.”',
    },
    {
      name: 'Michael Brown',
      title: 'Project Manager',
      company: 'Project Lead, Global Corp.',
      quote: '“Figma ipsum component variant main layer. List inspect thumbnail project object main. Flows style editor asset outline. Team align strikethrough arrange vector rectangle arrow opacity team.”',
    },
  ];

  const QuoteIcon = () => (
    <svg width='39' height='31' viewBox='0 0 39 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 5C0 2.23858 2.23858 0 5 0H13C15.7614 0 18 2.23858 18 5V18H5C2.23858 18 0 15.7614 0 13V5Z' fill='#B2914E' />
      <path d='M4.00066 27.5C8.00066 23.5 7.66758 18.5 7.00091 17L18 18C18 23.5 16.5735 26.8569 13.0007 29C10.5 30.5 -0.999338 32.5 4.00066 27.5Z' fill='#B2914E' />
      <path d='M21 5C21 2.23858 23.2386 0 26 0H34C36.7614 0 39 2.23858 39 5V18H26C23.2386 18 21 15.7614 21 13V5Z' fill='#B2914E' />
      <path d='M25.0007 27.5C29.0007 23.5 28.6676 18.5 28.0009 17L39 18C39 23.5 37.5735 26.8569 34.0007 29C31.5 30.5 20.0007 32.5 25.0007 27.5Z' fill='#B2914E' />
    </svg>
  );

  const StarIcon = () => (
    <svg width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6.42937 0.756229C6.60898 0.203442 7.39102 0.203444 7.57063 0.75623L8.6614 4.11327C8.74173 4.36049 8.9721 4.52786 9.23204 4.52786H12.7618C13.3431 4.52786 13.5847 5.27163 13.1145 5.61327L10.2588 7.68804C10.0485 7.84083 9.96055 8.11165 10.0409 8.35886L11.1316 11.7159C11.3113 12.2687 10.6786 12.7284 10.2083 12.3867L7.35267 10.312C7.14238 10.1592 6.85762 10.1592 6.64733 10.312L3.79166 12.3867C3.32143 12.7284 2.68874 12.2687 2.86835 11.7159L3.95912 8.35886C4.03945 8.11165 3.95145 7.84083 3.74116 7.68804L0.885485 5.61327C0.415257 5.27163 0.656924 4.52786 1.23816 4.52786H4.76796C5.0279 4.52786 5.25827 4.36049 5.3386 4.11327L6.42937 0.756229Z' fill='#B4D400' />
    </svg>
  );

  const TestimonialCard = ({ name, title, company, quote }) => (
    <div className='bg-[#2C444C] p-6 rounded-3xl min-w-[320px] flex flex-col justify-between transform hover:scale-90 hover:rotate-2 transition-all duration-300'>
      <QuoteIcon />
      <div className='flex flex-col gap-3 text-primary my-12 text-wrap grow'>
        <h3 className='md:text-2xl text-xl font-semibold'>{title}</h3>
        <p>{quote}</p>
        <div className='flex items-center gap-1'>
          <StarIcon />
          <span>5.0</span>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-12 h-12 rounded-full bg-primary'></div>
        <div className='leading-5'>
          <p className='text-primary'>{name}</p>
          <p className='text-primary/70'>{company}</p>
        </div>
      </div>
    </div>
  );

  const portfolioItems = [
    {
      title: 'Google Ad Setup & Optimizations',
      description: 'Developed and optimized high-performing sales ad campaigns that increased conversion rates by 25%. Implemented A/B testing and retargeting strategies to maximize ROI.',
      tags: ['google','ads', 'optimization', 'sales'],
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHdQOtcDKs5Xw/feedshare-shrink_800/B56ZQJKjRfHIAg-/0/1735320550006?e=1757548800&v=beta&t=sBdGvZS5HLaBuU8Swd20vY1XyuGS6UXvqMxGFCGq6Ok',
    },
    {
      title: 'Facebook Ads Management',
      description: 'Managed Facebook ad campaigns, focusing on audience research and creative design. Achieved a 40% reduction in cost per acquisition through continuous optimization and performance analysis.',
      tags: ['facebook', 'ads', 'social'],
      image: 'https://images.unsplash.com/photo-1596526131088-a49688461754?q=80&w=1740&auto=format&fit=crop',
    },
    {
      title: 'YouTube SEO & Ranking Strategy',
      description: 'Improved video visibility and organic reach with a comprehensive YouTube SEO strategy. Focused on title, tag, and thumbnail optimization to drive a 300% increase in watch time and subscriber growth.',
      tags: ['youtube', 'seo', 'video'],
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHQMOv_iizyKg/feedshare-shrink_800/feedshare-shrink_800/0/1728051273368?e=1757548800&v=beta&t=YrLRsVmPHaNERj6ytYPGD3fAMd3HMdaETF-vudtW4Pg',
    },
    {
      title: 'Performance Max Campaigns',
      description: 'Launched and managed Google Performance Max campaigns that consolidated various ad types, resulting in a 50% increase in online sales and a streamlined ad management process.',
      tags: ['google', 'ads', 'ppc'],
      image: 'https://images.unsplash.com/photo-1621905241913-e517865c010c?q=80&w=1740&auto=format&fit=crop',
    },
  ];

  const Arrowicon = () => (
    <svg className="w-6 h-6 dark:text-primary text-secondary group-hover:rotate-45 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const PortfolioCard = ({ title, description, tags, image }) => (
    <div className='dark:bg-primary bg-secondary rounded-2xl dark:shadow-primary/20 shadow-sm hover:shadow-xl transition-shadow duration-300 p-2 md:p-4 group'>
      <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
        {/* Image Area */}
        <div className='flex-shrink-0 w-full md:w-2/5 h-48 sm:h-64 overflow-hidden rounded-xl'>
          <img src={image} alt={title} className='bg-white w-full h-full object-cover group-hover:scale-105 transition-all' />
        </div>

        {/* Content Area */}
        <div className='flex-grow flex flex-col justify-between'>
          <div>
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-xl sm:text-2xl font-bold dark:text-secondary text-primary'>{title}</h3>
              <div className='w-10 h-10 dark:bg-secondary bg-primary dark:text-primary text-secondary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110'>
                <Arrowicon />
              </div>
            </div>
            <p className='text-sm sm:text-base dark:text-secondary/70 text-primary mb-4 line-clamp-3'>{description}</p>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <span key={index} className='text-xs font-medium bg-primary dark:bg-secondary dark:text-primary text-secondary px-3 py-1 rounded-full'>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactForm = () => (
    <div className='md:w-[40%] h-screen flex justify-center flex-col gap-10 w-full text-secondary dark:text-primary'>
      <h2 className='text-4xl font-serif text-center'>Get in touch</h2>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Name'
          className='p-4 rounded-xl bg-secondary/70 dark:bg-primary/70 dark:text-secondary text-primary dark:placeholder:text-secondary/80 placeholder:text-primary/80 focus:outline-none focus:ring-2 focus:ring-gray-600'
        />
        <input
          type='email'
          placeholder='Email'
          className='p-4 rounded-xl bg-secondary/70 dark:bg-primary/70 dark:text-secondary text-primary dark:placeholder:text-secondary/80 placeholder:text-primary/80 focus:outline-none focus:ring-2 focus:ring-gray-600'
        />
        <textarea
          placeholder='Write a message.'
          rows='5'
          className='p-4 rounded-xl bg-secondary/70 dark:bg-primary/70 dark:text-secondary text-primary dark:placeholder:text-secondary/80 placeholder:text-primary/80 focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none'
        ></textarea>
        <button
          type='submit'
          className='bg-secondary dark:bg-primary dark:text-secondary hover:bg-secondary/80 dark:hover:bg-primary/80 text-primary font-bold py-3 rounded-xl transition-colors'
        >
          Send Message
        </button>
      </form>
      <div className='flex justify-center gap-4'>
        <a href='#' aria-label='WhatsApp'>
          <svg className='w-8 h-8 hover:text-green-500 text-secondary fill-current transition-colors' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0005 0.360001C7.37669 0.360001 0.360452 7.37624 0.360452 16C0.360452 18.6928 1.05609 21.3407 2.37529 23.6772L0.385612 30.7764C0.320332 31.0096 0.383573 31.2599 0.552213 31.4333C0.682093 31.5672 0.858892 31.64 1.04045 31.64C1.09485 31.64 1.14993 31.6332 1.20365 31.6203L8.61293 29.785C10.8753 30.9994 13.4233 31.64 16.0005 31.64C24.6242 31.64 31.6405 24.6238 31.6405 16C31.6405 7.37624 24.6242 0.360001 16.0005 0.360001ZM23.8681 21.5189C23.5335 22.445 21.9287 23.2903 21.1576 23.4038C20.4653 23.5052 19.5895 23.5487 18.628 23.2468C18.0452 23.0632 17.2972 22.8197 16.3391 22.411C12.3115 20.6934 9.68121 16.6888 9.47993 16.4243C9.27933 16.1598 7.84045 14.2748 7.84045 12.3239C7.84045 10.373 8.87745 9.41352 9.24601 9.0164C9.61457 8.61928 10.0491 8.52 10.317 8.52C10.5849 8.52 10.8522 8.5234 11.0868 8.53428C11.3336 8.54652 11.6648 8.44112 11.9905 9.21496C12.3251 10.0092 13.1281 11.9601 13.2274 12.1594C13.3281 12.3579 13.3947 12.5898 13.2614 12.8543C13.1281 13.1188 13.0615 13.2841 12.8602 13.516C12.6589 13.7478 12.4386 14.0328 12.2577 14.2109C12.0565 14.4088 11.8477 14.623 12.0816 15.0201C12.3155 15.4172 13.1213 16.7154 14.3154 17.7666C15.8488 19.1171 17.1429 19.536 17.5441 19.7346C17.9453 19.9331 18.1799 19.8998 18.4138 19.6353C18.6477 19.3701 19.4175 18.4772 19.6847 18.0808C19.9519 17.6844 20.2199 17.7496 20.5884 17.8822C20.957 18.0142 22.931 18.973 23.3322 19.1715C23.7334 19.3701 24.0013 19.4694 24.102 19.6346C24.2026 19.7992 24.2026 20.5934 23.8681 21.5189Z" />
          </svg>
        </a>
        <a href='#' aria-label='Instagram'>
          <svg className='w-8 h-8 t hover:text-pink-700 text-secondary fill-current transition-colors' viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.92035 0.98C4.47495 0.98 0.860352 4.8278 0.860352 9.56V21.44C0.860352 26.1722 4.47495 30.02 8.92035 30.02H20.0804C24.5258 30.02 28.1404 26.1722 28.1404 21.44V9.56C28.1404 4.8278 24.5258 0.98 20.0804 0.98H8.92035ZM21.9404 6.26C22.6224 6.26 23.1804 6.854 23.1804 7.58C23.1804 8.306 22.6224 8.9 21.9404 8.9C21.2584 8.9 20.7004 8.306 20.7004 7.58C20.7004 6.854 21.2584 6.26 21.9404 6.26ZM14.5004 8.24C18.2638 8.24 21.3204 11.4938 21.3204 15.5C21.3204 19.5062 18.2638 22.76 14.5004 22.76C10.737 22.76 7.68035 19.5062 7.68035 15.5C7.68035 11.4938 10.737 8.24 14.5004 8.24ZM14.5004 9.56C11.4252 9.56 8.92035 12.2264 8.92035 15.5C8.92035 18.7736 11.4252 21.44 14.5004 21.44C17.5756 21.44 20.0804 18.7736 20.0804 15.5C20.0804 12.2264 17.5756 9.56 14.5004 9.56Z" />
          </svg>
        </a>
        <a href='#' aria-label='Facebook'>
          <svg className='w-8 h-8 t hover:text-blue-600 text-secondary fill-current transition-colors' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0.0400009C6.73804 0.0400009 0.0400391 6.738 0.0400391 15C0.0400391 22.5004 5.56504 28.6932 12.7642 29.775V18.9651H9.06296V15.0326H12.7642V12.416C12.7642 8.08372 14.8749 6.18176 18.4755 6.18176C20.2 6.18176 21.1119 6.3096 21.5437 6.36808V9.80072H19.0875C17.5589 9.80072 17.0251 11.2498 17.0251 12.8832V15.0326H21.5049L20.897 18.9651H17.0251V29.807C24.3269 28.8162 29.96 22.5732 29.96 15C29.96 6.738 23.262 0.0400009 15 0.0400009Z" />
          </svg>
        </a>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className='bg-secondary/7 dark:bg-primary/7 dark:text-primary text-secondary'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <div className='flex flex-row py-10 items-center justify-between'>
          {/* Left Section - Logo and Navigation */}
          <div className='flex items-center'>
            <div className='flex gap-4 items-center'>
              <svg className='md:h-10 h-5 stroke-current text-secondary dark:text-primary' viewBox="0 0 49 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 31.6259C5.35402 37.392 15.4036 42.0049 20.7696 14.3275C26.1356 -13.3499 27.7125 7.973 28.1832 25.2714" stroke-width="1.5" stroke-linecap="round" />
                <path d="M19.3594 21.3881C28.1851 18.4462 41.2471 17.1671 37.3638 21.3881C29.2442 30.2138 21.4775 32.685 39.129 34.0971C53.2501 35.2268 46.1895 27.7426 42.6593 25.6244" stroke-width="1.5" stroke-linecap="round" />
              </svg>
              <div className='md:text-md text-sm uppercase tracking-widest flex flex-col'>
                <a className='hover:font-semibold' href='#services'>Services</a>
                <a className='hover:font-semibold' href='#portfolio'>Portfolio</a>
                <a className='hover:font-semibold' href='#about'>About me</a>
              </div>
            </div>
          </div>

          {/* Right Section - Location */}
          <div className='flex items-center gap-1 md:text-md text-sm'>
            {/* Location SVG icon */}
            <svg className='md:w-8 w-5 dark:text-primary text-secondary stroke-current' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z"  stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>DHAKA, BANGLADESH</span>
          </div>

        </div>
        {/* Center Section - Copyright */}
        <div className='text-sm text-secondary/80 dark:text-primary/80 text-center'>
          <div className='w-full h-[1px] bg-secondary/80 dark:bg-primary/80'></div>
          <p className='py-2 md:text-md text-sm'>Copyright © Reserved. Website developed by <a className=' hover:underline' href="https://www.linkedin.com/in/rafi-mozumder/" target='_blank' >Rafi Mazumder</a></p>
        </div>
      </div>

    </footer>
  );

  return (
    <main className='bg-primary dark:bg-secondary overflow-hidden'>
      {/*Hero section*/}
      <section className='h-screen flex items-center overflow-hidden relative'>
        <div className='absolute top-0 left-[50%] transform -translate-x-[50%] md:w-[35%] w-[60%] md:h-[80%] h-[40%] flex items-end justify-center rounded-b-full bg-secondary/20 dark:bg-primary/20 '>
          <div className='overflow-hidden rounded-b-full'>
            <div ref={svgRef} className='absolute bottom-0 -right-[15%] transform'>
              <svg className='md:w-60 w-30 dark:text-primary text-secondary fill-current' viewBox="0 0 253 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M135.536 0H117.464V80.3314L87.4901 5.84939L70.7345 12.6458L101.485 89.0574L43.4402 30.7829L30.6618 43.6119L86.2954 99.4653L14.1985 67.841L6.96331 84.4663L83.2503 117.929H0V136.072H83.2502L6.96333 169.534L14.1985 186.159L86.2953 154.535L30.6618 210.388L43.4402 223.216L101.485 164.943L70.7345 241.355L87.4901 248.15L117.464 173.669V254H135.536V173.669L165.51 248.15L182.265 241.355L151.515 164.943L209.56 223.216L222.338 210.388L166.704 154.535L238.802 186.159L246.036 169.534L169.75 136.072H253V117.929H169.749L246.036 84.4663L238.802 67.841L166.704 99.4653L222.338 43.6118L209.56 30.7829L151.515 89.0572L182.265 12.6458L165.51 5.84939L135.536 80.3314V0Z" />
              </svg>
            </div>
            <img className='w-full object-cover' src={headerImg} alt="" srcset="" />
          </div>
        </div>
        <div className='w-full md:mt-0 mt-50'>
          <div className='max-w-7xl relative mx-auto md:px-8 px-4 dark:text-primary text-secondary flex items-center md:justify-between justify-center md:text-start text-center'>
            <div className='z-10'>
              <h3 className='md:text-3xl text-xl font-playfairdisplay'>Hey. I’m Sunny,</h3>
              <div className='md:text-6xl text-4xl'>
                <h1 className='font-bebasneue font-bold'>A DIGITAL</h1>
                <h1 className='font-playfairdisplay italic'>& Brand</h1>
                <h1 className='font-bebasneue font-bold'>MARKETER</h1>
              </div>
              <p className='md:text-xl text-lg w-80 md:mt-4 mt-2'>Transforming ideas into stunning ADs and brand design that captivates, engages, and delivers results.</p>
              <div className='w-full flex md:justify-start justify-center group'>
                <a href='#contact' className='flex mt-8 items-center gap-4 p-1 rounded-full group-hover:bg-white group-hover:text-secondary bg-secondary dark:bg-primary dark:text-secondary text-primary transition-all'><span className='px-1 pl-2 font-semibold'>CONTACT ME</span>
                  <svg className='w-8 group-hover:rotate-90 transition-all' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="white" />
                    <path d="M10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19V18V17ZM26.7071 18.7071C27.0976 18.3166 27.0976 17.6834 26.7071 17.2929L20.3431 10.9289C19.9526 10.5384 19.3195 10.5384 18.9289 10.9289C18.5384 11.3195 18.5384 11.9526 18.9289 12.3431L24.5858 18L18.9289 23.6569C18.5384 24.0474 18.5384 24.6805 18.9289 25.0711C19.3195 25.4616 19.9526 25.4616 20.3431 25.0711L26.7071 18.7071ZM10 18V19H26V18V17H10V18Z" fill="#1F1F1F" />
                  </svg>
                </a>
              </div>
            </div>

            <div className='absolute top-0 md:right-8 right-4 z-10 md:block hidden'>
              <div>
                <a href='#services' className='flex items-center justify-end gap-4 text-end group cursor-pointer'>SERVICES <div className='w-10 h-[1px] bg-secondary dark:bg-primary group-hover:w-15 transition-all duration-300'></div></a>
                <a href='#portfolio' className='flex items-center justify-end gap-4 text-end group cursor-pointer'>PORTFOLIO <div className='w-10 h-[1px] bg-secondary dark:bg-primary group-hover:w-15 transition-all duration-300'></div></a>
                <a href='#about' className='flex items-center justify-end gap-4 text-end group cursor-pointer'>ABOUT ME <div className='w-10 h-[1px] bg-secondary dark:bg-primary group-hover:w-15 transition-all duration-300'></div></a>
              </div>
            </div>
          </div>
        </div>
        <svg className='text-secondary/5 fill-current absolute md:-bottom-[20%] -bottom-[10%] md:-right-[10%] -right-[30%] z-0 md:w-[500px] w-[400px]' viewBox="0 0 183 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.5579 16.3347C75.3365 -5.4449 106.825 -5.44489 119.603 16.3347L120.067 17.1257C125.963 27.1733 136.709 33.378 148.358 33.4596L149.276 33.466C174.527 33.6428 190.271 60.9123 177.798 82.8687L177.345 83.6661C171.591 93.7953 171.591 106.205 177.345 116.334L177.798 117.131C190.271 139.088 174.527 166.357 149.276 166.534L148.358 166.54C136.709 166.622 125.963 172.827 120.067 182.874L119.603 183.665C106.825 205.445 75.3365 205.445 62.5579 183.665L62.0938 182.874C56.1986 172.827 45.4517 166.622 33.8027 166.54L32.8856 166.534C7.63462 166.357 -8.10939 139.088 4.36292 117.131L4.81592 116.334C10.5698 106.205 10.5698 93.7953 4.81592 83.6661L4.36292 82.8687C-8.10939 60.9123 7.63462 33.6428 32.8856 33.466L33.8027 33.4596C45.4518 33.378 56.1986 27.1733 62.0938 17.1257L62.5579 16.3347Z" />
        </svg>
      </section>

      {/*About section*/}
      <section id='about' className='h-screen flex items-center overflow-hidden'>
        <div className='max-w-7xl mx-auto md:px-8 px-4 flex flex-col items-center justify-center'>
          <h1 className='md:text-4xl text-2xl dark:text-primary text-secondary font-playfairdisplay mb-4'>About Me</h1>
          <p className='md:text-xl text-lg dark:text-primary text-secondary text-center'>{about}</p>
        </div>
      </section>

      {/*Services section*/}
      <section id='services' className='md:h-screen flex items-center'>
        <div className='max-w-7xl mx-auto md:px-8 px-4'>
          <div className='py-10 flex items-center justify-between'>
            {/* Heading Area */}
            <div>
              <h2 className='text-2xl md:text-4xl dark:text-primary text-secondary font-playfairdisplay'>
                My Services
              </h2>
              <p className='mt-4 text-base sm:text-lg dark:text-primary/70 text-secondary/70 max-w-xl'>
                blanditiis eos optio assumenda! Dolorem asperiores, praesentium harum nostrum optio necessitatibus velit.
              </p>
            </div>
            <button className='p-2 md:px-4 px-3 md-text-md text-sm dark:bg-primary bg-secondary dark:text-secondary text-primary rounded-full cursor-pointer dark:hover:bg-primary/70 hover:bg-secondary/70'>Get Started</button>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-10'>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/*Testimonial section*/}
      <section id='testimonial' className='py-30 md:py-40'>
        <div className='max-w-7xl mx-auto md:px-8 px-4'>
          {/* Heading Area */}
          <div className='mb-12 lg:mb-16 text-center flex flex-col justify-center'>
            <h2 className='text-2xl md:text-4xl text-secondary dark:text-primary font-playfairdisplay'>
              Client Success Stories
            </h2>
            <p className='mt-4 text-base sm:text-lg text-secondary/70 dark:text-primary/70'>
              blanditiis eos optio assumenda! Dolorem asperiores, praesentium harum nostrum optio necessitatibus velit.
            </p>
          </div>
        </div>
        <div className='overflow-x-scroll md:px-8 px-4'>
          <div className='flex gap-4'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/*Portfolio section*/}
      <section id='portfolio' className='py-16 md:py-30'>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          {/* Heading Area */}
          <div className='mb-12 lg:mb-16'>
            <h2 className='text-2xl md:text-4xl text-secondary dark:text-primary font-playfairdisplay'>
              Portfolio & Case Studies
            </h2>
            <p className='mt-4 text-base sm:text-lg text-secondary/70 dark:text-primary/70 max-w-xl'>
              Explore my past projects and success stories. Each case study details the challenges, solutions, and results of my work.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className='grid md:gap-6 gap-4 md:grid-cols-1'>
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                description={item.description}
                tags={item.tags}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/*Contant section*/}
      <section id='contact' className='flex flex-col '>
        <div className='flex-grow md:px-6 px-4 flex items-center justify-center'>
          <ContactForm />
        </div>
        <Footer />
      </section>
    </main>
  )
}

export default App