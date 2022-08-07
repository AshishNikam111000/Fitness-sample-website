import './App.scss';
import { TbHierarchy2 } from 'react-icons/tb';
import { AiOutlineStock } from 'react-icons/ai';
import { IoDocumentText, IoBook } from 'react-icons/io5';
import { GiTakeMyMoney, GiReceiveMoney } from 'react-icons/gi';
import { BsShieldFillCheck, BsClock, BsFillFlagFill } from 'react-icons/bs';
import { RiTeamFill, RiArrowUpSLine, RiBuildingFill } from 'react-icons/ri';
import { FaUser, FaShoppingCart, FaBullhorn, FaGraduationCap, FaStoreAlt, FaTicketAlt } from 'react-icons/fa';

import { Suspense, useEffect, useRef } from 'react';
import scrollReveal from "scrollreveal";

function App() {
  const LogoURL = 'https://urbanfitkart.com/Franchises/images/logos/ulogowhite.png';
  const AboutUS = useRef(null);
  const MSSS = useRef(null);
  const BusinessForm = useRef(null);
  const Footer1 = useRef(null);
  const Footer2 = useRef(null);
  const TextChange = useRef(null);

  let index = 0;
  const Texts = [
    'Be your Own\n Boss',
    'Profitable \n Business',
    'Business \n Opportunity'
  ]

  function ToTOP() {
    window.scroll(0, 0);
  }


  useEffect(() => {
    setInterval(() => {
      TextChange.current.innerText = Texts[index];
      index += 1
      if (index > 2) {
        index = 0
      }
    }, 1500);


    if (AboutUS.current)
      scrollReveal().reveal(AboutUS.current, {
        reset: false,
        delay: 500
      });
    if (MSSS.current)
      scrollReveal().reveal(MSSS.current, {
        reset: false,
        delay: 500
      });
    if (BusinessForm.current)
      scrollReveal().reveal(BusinessForm.current, {
        reset: false,
        delay: 500
      });
    if (Footer1.current)
      scrollReveal().reveal(Footer1.current, {
        reset: false,
        delay: 500
      });
    if (Footer2.current)
      scrollReveal().reveal(Footer2.current, {
        reset: false,
        delay: 500
      });
  }, [])



  return (
    <div className="App">

      {/* NAVBAR */}
      <Suspense>
        <div className='Navbar flex items-center justify-center w-full'>
          <img className='w-1/6 cursor-pointer' src={LogoURL} alt="LOGO" onClick={ToTOP} />
        </div>

        {/* Introduction Section */}
        <div className='Background flex flex-col justify-center items-center w-full h-screen pt-48 text-white'>
          <div className='w-full flex justify-center gap-20'>
            <div className='w-1/3'>
              <img src="https://urbanfitkart.com/Franchises/homepages/fitness/images/Product-Collage.webp" alt="IMAGE1" />
            </div>

            <div className='flex flex-col gap-5 items-start bg-zinc-900 rounded-lg pl-5 pt-10 pb-10 pr-10'>
              <div ref={TextChange} className='text-5xl whitespace-pre-line'>{Texts[0]}</div>
              <div className='text-xl whitespace-pre-line'>{'we have vast customer base already in\n pune with over 10,000 regular customer'}</div>
              <button className='bg-white p-2 rounded-md text-zinc-600 hover:bg-green-400 hover:text-black'>GET FRANCHISE</button>
            </div>


          </div>
          <div>
            <img src="https://urbanfitkart.com/Franchises/homepages/fitness/images/brands.png" alt="IMAGE2" />
          </div>

        </div>

        {/* About Us Section */}
        <div ref={AboutUS} className='w-full AboutUS flex flex-col justify-center items-center text-white gap-20 p-10'>
          <div className='w-2/3 flex flex-col justify-center items-center gap-8'>
            <div className='text-5xl Title'>Why UrbanFit</div>
            <div className='text-center mb-5'>
              Owning a franchise not only will give you the opportunity to take charge of your own
              successful business but also allows you to be a part of the movement in the business of health supplements.
              If you are accepted as a UrbanFit Franchise owner, you will be a partner of India’s fastest growing fitness
              tech brand and the most trustworthy name in the industry
            </div>
            <div className='flex gap-10'>
              <div className='flex flex-col gap-3 justify-center items-center h-full'>
                <div className='text-2xl'>15462</div>
                <div className='h-0.5 bg-white w-4'></div>
                <div className='whitespace-pre-line text-sm'>
                  {`No of Client
                Per Month`}
                </div>
              </div>
              <div className='flex flex-col gap-3 justify-center items-center h-full'>
                <div className='text-2xl'>3</div>
                <div className='h-0.5 bg-white w-4'></div>
                <div className='whitespace-pre-line text-sm'>No of Stores</div>
              </div>
              <div className='flex flex-col gap-3 justify-center items-center h-full'>
                <div className='text-2xl'>10 Lacs</div>
                <div className='h-0.5 bg-white w-4'></div>
                <div className='whitespace-pre-line text-sm'>
                  {`Revenue Generated
                Per Store`}
                </div>
              </div>
              <div className='flex flex-col gap-3 justify-center items-center h-full'>
                <div className='text-2xl'>67</div>
                <div className='h-0.5 bg-white w-4'></div>
                <div className='whitespace-pre-line text-sm'>
                  {`Brands Officially
                Connected`}
                </div>
              </div>
              <div className='flex flex-col gap-3 justify-center items-center h-full'>
                <div className='text-2xl'>∞</div>
                <div className='h-0.5 bg-white w-4'></div>
                <div className='whitespace-pre-line text-sm'>Opportunities</div>
              </div>
            </div>
          </div>

          <div className='w-2/3 flex flex-col justify-center items-center gap-8'>
            <div className='text-5xl Title'>UrbanFit Location</div>
            <div className='flex w-full justify-evenly'>
              <div>
                UrbanFit Shop - F Residency
              </div>
              <div>
                UrbanFit Shop - Kharadi
              </div>
              <div>
                UrbanFit Shop - Bibewadi
              </div>
            </div>
          </div>

          <div className='w-2/3 flex flex-col justify-center items-center gap-8 mb-10'>
            <div className='text-5xl Title'>Urbanfit Franchies Vision</div>
            <div className='flex h-96 gap-16'>
              <div className='flex justify-end items-end'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-5 flex flex-col items-center gap-10'>
                  <BsShieldFillCheck className='InsideFill w-1/2 h-1/2' />
                  <div className='text-center'>We aim to bring the change in fitness industry by establishing network of state of the art health supplement storess</div>
                </div>
              </div>
              <div className='flex justify-start items-start'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-5 flex flex-col gap-10'>
                  <div className='InsideFill text-9xl flex items-end justify-center'>
                    0
                    <div className='text-lg'>%</div>
                  </div>
                  <div className='text-center'>There is no possibility of fake products with UrbanFit due to our vast tie network of premium supplement brands</div>
                </div>
              </div>
              <div className='flex justify-end items-end'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-5 flex flex-col items-center gap-10'>
                  <TbHierarchy2 className='InsideFill w-1/2 h-1/2' />
                  <div className='text-center'>Our priority will always be our customer. We aim to build trust, happiness and loyalty for our customers</div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-2/3 flex flex-col justify-center items-center gap-8 mb-10'>
            <div className='text-6xl Title'>Prerequisites {'&'} Procedure</div>
            <div className='text-center'>We are looking for people who are ready and eager to work with us to successfully launch a franchise and smoothly operate it.</div>
            <div className='flex flex-wrap'>
              <div className='w-1/2 p-5'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-10 flex flex-col items-center gap-10 h-full'>
                  <BsClock className='InsideFill w-1/3 h-1/3 fill-orange-600' />
                  <div className='text-center'>People willing to donate time and resources to the business</div>
                </div>
              </div>
              <div className='w-1/2 p-5'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-10 flex flex-col items-center gap-10 h-full'>
                  <BsFillFlagFill className='InsideFill w-1/3 h-1/3 fill-orange-600' />
                  <div className='text-center'>People with long term vision and the determination to make it happen</div>
                </div>
              </div>
              <div className='w-1/2 p-5'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-10 flex flex-col items-center gap-10 h-full'>
                  <IoBook className='InsideFill w-1/3 h-1/3 fill-orange-600' />
                  <div className='text-center'>Financial and logistical requirements and guidelines</div>
                </div>
              </div>
              <div className='w-1/2 p-5'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-10 flex flex-col items-center gap-10 h-full'>
                  <FaGraduationCap className='InsideFill w-1/3 h-1/3 fill-orange-600' />
                  <div className='text-center'>A sound investor profile with sufficient back up and ability to sustain during adverse scenarios</div>
                </div>
              </div>
              <div className='w-1/2 p-5'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-10 flex flex-col items-center gap-10 h-full'>
                  <FaTicketAlt className='InsideFill w-1/3 h-1/3 fill-orange-600' />
                  <div className='text-center'>Attractive space in a high footfall area with a minimum carpet area of 200 sq. ft - 500 sq. ft.</div>
                </div>
              </div>
              <div className='w-1/2 p-5'>
                <div className='BackgroundHoverTransition border-2 border-zinc-500 p-10 flex flex-col items-center gap-10 h-full'>
                  <FaStoreAlt className='InsideFill w-1/3 h-1/3 fill-orange-600' />
                  <div className='text-center'>Willingness to adhere to high customer service standards set by UrbanFit.</div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-2/3 flex flex-col justify-center items-center gap-8 mb-10'>
            <div className='text-6xl Title'>Other Financials</div>
            <div className='flex flex-wrap'>
              <div className='w-1/2 p-5'>
                <div className='p-5 flex justify-start items-start h-full gap-8'>
                  <div className='flex'>
                    <GiReceiveMoney className='w-10 h-10 fill-orange-600' />
                  </div>
                  <div>
                    <div className='font-semibold mb-3'>
                      Franchise Fee 5 Lacs
                    </div>
                    <div>
                      Start your Franchise Business Under Rs.5 Lakh Now. Check out India's most wanted Franchise Opportunity Under Rs.5 Lakh Only
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-1/2 p-5'>
                <div className='p-5 flex justify-start items-start h-full gap-8'>
                  <div className='flex'>
                    <RiBuildingFill className='w-10 h-10 fill-orange-600' />
                  </div>
                  <div>
                    <div className='font-semibold mb-3'>
                      Interiors 1800-2200/sqft
                    </div>
                    <div>
                      The would be franchisor should have minimum shop area of 200 sqft
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-1/2 p-5'>
                <div className='p-5 flex justify-start items-start h-full gap-8'>
                  <div className='flex'>
                    <AiOutlineStock className='w-10 h-10 fill-orange-600' />
                  </div>
                  <div>
                    <div className='font-semibold mb-3'>
                      Stock 8-15 Lacs
                    </div>
                    <div>
                      Franchisor is only allowed to purchase stock from the parent company
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-1/2 p-5'>
                <div className='p-5 flex justify-start items-start h-full gap-8'>
                  <div className='flex'>
                    <GiTakeMyMoney className='w-10 h-10 fill-orange-600' />
                  </div>
                  <div>
                    <div className='font-semibold mb-3'>
                      Brand Ambassador Fee* 1.5 Lacs
                    </div>
                    <div>
                      The Brand Ambassador Fee is around 1.5 lakh to perform at an event.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Marketing Support & Software Support */}
        <div ref={MSSS} className='w-full text-zinc-800 flex justify-center items-center p-32'>
          <div className='flex flex-col items-center gap-10'>
            <div className='flex flex-col items-center text-4xl w-full'>
              <div className='p-5'>
                Marketing Support {'&'} Software Support
              </div>
              <div className='w-1/5 h-1 bg-sky-500'></div>
            </div>

            <div className='flex w-full justify-between p-5'>
              <div className='flex flex-col gap-10 items-center'>
                <div className='flex items-center gap-5 w-full'>
                  <IoDocumentText className='w-8 h-8' fill='#353434' />
                  <div>Billing Software</div>
                </div>
                <div className='flex items-center gap-5 w-full'>
                  <RiTeamFill className='w-8 h-8' fill='#353434' />
                  <div>Stock Management</div>
                </div>
              </div>
              <div className='flex flex-col gap-10 items-center'>
                <div className='flex items-center gap-5 w-full'>
                  <FaUser className='w-8 h-8' fill='#353434' />
                  <div>Customer Data</div>
                </div>
                <div className='flex items-center gap-5 w-full'>
                  <FaShoppingCart className='w-8 h-8' fill='#353434' />
                  <div>Purchase Details</div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-5'>
              <FaBullhorn className='w-8 h-8' fill='#353434' />
              <div>Marketing Support</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div ref={BusinessForm} className='FormBackGround flex justify-center items-center w-full p-32 '>
          <div className='flex flex-col items-center bg-zinc-900 p-10 gap-5 rounded-sm'>
            <div className='text-5xl font-semibold text-white'> Start Business Today </div>
            <input className='InputField w-full bg-transparent' type="text" placeholder='Enter your name' />
            <input className='InputField w-full bg-transparent' type="number" placeholder='Enter your mobile number' />
            <input className='InputField w-full bg-transparent' type="text" placeholder='Enter your city' />
            <input className='InputField w-full bg-transparent' type="text" placeholder='Enter your state' />
            <button className='rounded-lg bg-emerald-900 hover:bg-emerald-500 hover:text-zinc-900 w-fit p-3 text-white'> SEND MESSAGE</button>
          </div>
        </div>

        {/* Go to top Button */}
        <div className='rounded-full bg-zinc-600 hover:bg-orange-600 w-fit fixed bottom-8 right-8' onClick={ToTOP}>
          <RiArrowUpSLine className='w-10 h-10 cursor-pointer fill-white' />
        </div>

        {/* Footer */}
        <div ref={Footer1} className='flex text-neutral-400 text-sm clas justify-evenly p-16 bg-zinc-900'>
          <div className=''>
            <div className='w-48 cursor-pointer'>
              <img src={LogoURL} alt="Logo" />
            </div>
            <div className='whitespace-pre-line mb-5 mt-5'>
              {'Cerebrum IT Park, OFFICE NO. 1 E,\n WING NO. B3, SECOND FLOOR,\n Kalyani Nagar, Pune,\n Maharashtra-411014, India'}
            </div>
            <div className='whitespace-pre-line'>
              {'Ph: 8390836100, 9921212116 \n Email: info@urbanfitwellness.com'}
            </div>
          </div>
          <div className='flex gap-20'>
            <div className='flex flex-col gap-3'>
              <div className='mb-5 font-semibold text-white text-lg' >COMPANY</div>
              <div>About Us</div>
              <div>Blog</div>
              <div>Contact Us</div>
              <div>Policy</div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='mb-5 font-semibold text-white text-lg'> PRODUCTS</div>
              <div> Whey Protein Isolate</div>
              <div> Fat Burner</div>
              <div> Pre Workout</div>
              <div> Weight Gainer</div>
              <div> Immunity Boosters</div>
              <div> Micro Nutrirnts</div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='mb-5 font-semibold text-white text-lg'> TOP BRANDS</div>
              <div> Optimum Nutrition</div>
              <div> Muscletech</div>
              <div> MuscleBlaze</div>
              <div> GNC</div>
              <div> Scitron</div>
              <div> Labrada</div>
              <div> Ronnie Coleman Series</div>
              <div> Big Flex</div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='mb-5 font-semibold text-white text-lg'> TRENDING</div>
              <div> MyFitness Peanut Butter</div>
              <div> Phab Protein Bomb</div>
              <div> Osaa Whey Isolate</div>
              <div> NRoute Isolate</div>
              <div> Protein Bars</div>
            </div>
          </div>
        </div>

        <div ref={Footer2} className='flex justify-evenly bg-zinc-800 p-6 text-white text-sm'>
          <div> @2022 Urbanfit Wellness Private Limited</div>
          <div> Privacy Policy</div>
        </div>
      </Suspense>

    </div>

  );
}

export default App;
