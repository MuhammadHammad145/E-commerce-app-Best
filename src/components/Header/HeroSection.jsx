
// import React, { useState } from 'react';
// import { AppleFilled } from '@ant-design/icons';
// import Slider from 'react-slick';
// import {  Typography} from 'antd'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import iphone14 from "../../assets/iphone14.jpg"
// // import { Link } from 'react-router-dom';

// const {Title}=Typography;

// const HeroCarousel = () => {


//     const [isHover,setIsHover]=useState(false)

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
    
//     <div className="carousel-wrapper" style={{ width: '100%', overflow: 'hidden' }}>
//       <Slider {...settings}>
//         {/* Slide 1 - iPhone 14 */}
//         <div className="slide">
//           <div style={{
//             dots: true,
//             backgroundColor: 'black',
//             color: 'white',
//             padding: '50px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}>
//             <div style={{marginLeft:'10%'}}>
//               <span><AppleFilled style={{fontSize: 40}} /></span> <span>iPhone 16 Series</span>
//               <p style={{ fontSize: '48px', margin: '10px 0' }}>Up to 10% <br /> off Voucher</p>
//               <Title level={5} className='text-white  pt-0 fw-lighter pb-2' style={{ cursor: 'pointer' }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}><span style={{borderBottom: isHover ? '1px solid white' : '1px solid transparent',transition: 'border-color 0.3s ease',display: 'inline-block'}}>Shop Now →</span></Title>
//             </div>
//              <img src={iphone14} style={{width:"300px",marginRight:'150px',height:"300px",background:"cover"}}/>
//           </div>
//         </div>

//         {/* Slide 2 - Your uploaded image (assumed as iPhone 15) */}
//         <div className="slide">
//           <div style={{
//             backgroundColor: '#111',
//             color: 'white',
//             padding: '50px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}>
//             <div style={{marginLeft:'10%'}}> 
//               <h2>oraimo Watch ES 2 1.95″</h2>
//               <p style={{ fontSize: '48px', margin: '10px 0' }}>AMOLED IP68 Smart Watch</p>
//               <Title level={5} className='text-white  pt-0 fw-lighter pb-2' style={{ cursor: 'pointer' }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}><span style={{borderBottom: isHover ? '1px solid white' : '1px solid transparent',transition: 'border-color 0.3s ease',display: 'inline-block'}}>Shop Now →</span></Title>
//             </div>
//             <img src="https://cdn-img.oraimo.com/fit-in/600x600/KE/product/2024/07/24/OSW-810-680-9.jpg" alt="iPhone 15" style={{ width: '300px', marginRight:'150px',height:"300px" }} />
//           </div>
//         </div>
//         <div className="slide">
//           <div style={{
//             backgroundColor: '#111',
//             color: 'white',
//             padding: '50px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}>
//             <div style={{marginLeft:'10%'}}> 
//               <h2 style={{fontSize:'24px'}}>Baseus D05 Bowie Wireless Headphones</h2>
//               <p style={{ fontSize: '36px', margin: '10px 0' }}>Bluetooth 5.3 Foldable Sport Headset</p>
//                 <Title level={5} className='text-white  pt-0 fw-lighter pb-2' style={{ cursor: 'pointer' }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}><span style={{borderBottom: isHover ? '1px solid white' : '1px solid transparent',transition: 'border-color 0.3s ease',display: 'inline-block'}}>Shop Now →</span></Title>
//               {/* <Link to="/shop/iphone15" style={{ textDecoration: 'underline', color: 'white' }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
//                <span style={{borderBottom: isHover ? '1px solid white' : '1px solid transparent',transition: 'border-color 0.3s ease',display: 'inline-block'}}></span> Shop Now →  */}
//               {/* </Link> */}
//             </div>
//             <img src="https://phonetive.pk/cdn/shop/files/Sbb1c2fa4e39b43189171fc78be5b5f29i.jpg_554x554.jpg_5be38468-9421-4043-bdd1-9dfcf581470d_1024x1024.webp?v=1722931732" alt="iPhone 15" style={{ width: '300px', marginRight:'150px',height:"300px" }} />
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default HeroCarousel;




// import { Row, Col, Typography, Image } from 'antd'
// import React, { useState } from 'react'
// import iphone14 from "../../assets/iphone14.jpg"
// import { FaApple } from 'react-icons/fa';
// import Slider from 'react-slick';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from 'react-router-dom';

// const { Title,Paragraph } = Typography
// const HeroSection = () => {
//     const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//     const [isHover,setIsHover]=useState(false)
//     return (
//         <div className='bg-black w-100 d-flex align-items-center ' style={{ height: "300px" }}>
//             <div className='container'>
//                 <Row>
//                     <Col span={12} className='d-flex flex-column'>
//                     <div className='d-flex flex-row ms-auto me-auto'>

//                         <FaApple className=' text-white mt-2'style={{ width:36,height:36 }} />

//                         <Paragraph className='text-white text-center fw-lighter ms-3 mt-3' >Iphone 14 series </Paragraph>
//                     </div>

//                         <Title level={1} className='text-white text-center fw-bold fs-1 ' >UP to 10% <br />off Voucher </Title>
//                         <Title level={4} className='text-white text-center pt-0 fw-lighter pb-2' style={{ cursor: 'pointer' }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}><span style={{borderBottom: isHover ? '1px solid white' : '1px solid transparent',transition: 'border-color 0.3s ease',display: 'inline-block'}}>Shop Now</span></Title>
                        

//                     </Col>
//                     <Col span={12} >
//                     <div className='d-flex align-items-center '>
                        
//                     <img src={iphone14} style={{width:"80%",height:"80%",background:"cover"}}/>
//                     </div>

//                     </Col>
//                 </Row>
//             </div>
//         </div>
//     )
// }

// export default HeroSection


import React, { useState } from 'react';
import { AppleFilled } from '@ant-design/icons';
import Slider from 'react-slick';
import { Typography } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Girl from "../../assets/black.webp"
import Dress from "../../assets/blackdress.jpg"

const { Title } = Typography;

const HeroCarousel = () => {
  const [isHover, setIsHover] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-wrapper w-100 overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slide">
          <div className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between p-4  text-white" style={{backgroundColor:"#202002ff"}}>
            <div className="container ms-lg-5 text-center text-lg-start">
              <span><AppleFilled style={{ fontSize: 40 }} /></span> <span>iPhone 16 Series</span>
              <p style={{ fontSize: '36px', margin: '10px 0' }}>Up to 10% <br /> off Voucher</p>
              <Title level={5}
                className="text-white pt-0 fw-light pb-2"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <span
                  style={{
                    borderBottom: isHover ? '1px solid white' : '1px solid transparent',
                    transition: 'border-color 0.3s ease',
                    display: 'inline-block'
                  }}
                >
                  Shop Now →
                </span>
              </Title>
            </div>
            <div className="mb-3 mb-lg-0 me-lg-5">
               <img
                src={Girl}
                alt="Baseus Headphones"
                className="rounded-1" style={{ width: "350px", height: "100%",objectFit:"fill"}}
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide">
          <div className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between p-4 text-white" style={{backgroundColor:"black"}}>
            <div className="container ms-lg-5 text-center text-lg-start">
              <h2>oraimo Watch ES 2 1.95″</h2>
              <p style={{ fontSize: '36px', margin: '10px 0' }}>AMOLED IP68 Smart Watch</p>
              <Title level={5}
                className="text-white pt-0 fw-light pb-2"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <span
                  style={{
                    borderBottom: isHover ? '1px solid white' : '1px solid transparent',
                    transition: 'border-color 0.3s ease',
                    display: 'inline-block'
                  }}
                >
                  Shop Now →
                </span>
              </Title>
            </div>
            <div className="mb-3 mb-lg-0 me-lg-5">
              <img
                src="https://roheenaz.com/cdn/shop/files/RNZ-03B-2_57846f19-3ce8-4aaf-a488-5711a82c5284.jpg?v=1728541664&width=360"
                alt="oraimo Watch"
               className="rounded-1" style={{ width: "350px", height: "100%",objectFit:"cover"}}
              />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide">
          <div className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between p-4 text-white" style={{backgroundColor:"black"}}>
            <div className="container ms-lg-5 text-center text-lg-start">
              <h2 style={{ fontSize: '24px' }}>Baseus D05 Bowie Wireless Headphones</h2>
              <p style={{ fontSize: '32px', margin: '10px 0' }}>Bluetooth 5.3 Foldable Sport Headset</p>
              <Title level={5}
                className="text-white pt-0 fw-light pb-2"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <span
                  style={{
                    borderBottom: isHover ? '1px solid white' : '1px solid transparent',
                    transition: 'border-color 0.3s ease',
                    display: 'inline-block'
                  }}
                >
                  Shop Now →
                </span>
              </Title>
            </div>
            <div className="mb-3 mb-lg-0 me-lg-5">
              <img
                src={Dress}
                alt="Baseus Headphones"
                className="rounded-1" style={{ width: "350px", height: "100%",objectFit:"cover"}}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;



