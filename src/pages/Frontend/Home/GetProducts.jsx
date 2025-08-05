import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Row, Col, Typography, Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { collection, doc, getDocs, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { FiEye, FiHeart, FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuthContext } from '../../../context/Auth';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const GetProducts = () => {

    const { user } = useAuthContext()

    const [isProcessing, setIsProcessing] = useState(false)

    const [isHover, setIsHover] = useState(false)
    const [isCursor, setIsCursor] = useState(false)
    const [count, setCount] = useState(0)

    const navigate = useNavigate()

    const sliderRef = useRef(null);

    const [products, setProducts] = useState([]);


    const getTodos = useCallback(async () => {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const products = [];

        querySnapshot.forEach((doc) => {
            const todo = doc.data();
            products.push(todo);
        });
        setProducts(products);
    }, []);

    useEffect(() => { getTodos() }, [getTodos]);

    const addToCart = async (product) => {


        setIsProcessing(true)

        const newCount = count + 1
        setCount(newCount)

        const cart = { id: window.getRandomId(), uid: user.uid, productId: product.id, imageURL: product.imageURL, productName: product.productName, brand: product.brand, price: product.price, originalPrice: product.originalPrice, description: product.description, category: product.category, offer: product.offer, createdAt: serverTimestamp(), number: newCount, subTotal: product.price, num: 1 }

        try {
            await setDoc(doc(db, "cart", cart.id), cart);

            window.toastify("Add product  successfully", "success")
        } catch (error) {
            window.toastify("Frist You will sign up so you will add product", "error")
            console.error("Error adding document: ", error);
        } finally {
            setIsProcessing(false)
        }



    }

    // const addToCart = async (product) => {
    //     if (user && user.uid) {   // main fix here!
    //         setIsProcessing(true);
    //         const newCount = count + 1;
    //         setCount(newCount);

    //         const cart = {
    //             id: window.getRandomId(),
    //             uid: user.uid, // Store user uid in cart
    //             productId: product.id,
    //             imageURL: product.imageURL,
    //             productName: product.productName,
    //             brand: product.brand,
    //             price: product.price,
    //             originalPrice: product.originalPrice,
    //             description: product.description,
    //             category: product.category,
    //             offer: product.offer,
    //             createdAt: serverTimestamp(),
    //             number: newCount
    //         };

    //         try {
    //             await setDoc(doc(db, "cart", cart.id), cart);
    //             window.toastify("Product added to cart successfully", "success");
    //         } catch (error) {
    //             window.toastify("Error adding product to cart", "error");
    //             console.error("Error adding document: ", error);
    //         } finally {
    //             setIsProcessing(false);
    //         }
    //     } else {
    //         window.toastify("Please sign in first to add products to cart", "error");
    //     }
    // };
    // Custom Arrows for Slider
    const SampleNextArrow = () => {
        return (
            <Button
                shape="circle"
                size="large"
                icon={<LeftOutlined style={{ color: isHover ? "white" : "black" }} />}
                style={{ backgroundColor: isHover ? "black" : "white" }}
                // className="slick-next"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}

                onClick={() => sliderRef.current.slickPrev()}
            />
        );
    };

    const SamplePrevArrow = () => {
        return (
            <Button
                shape="circle"
                size="large"
                icon={<RightOutlined style={{ color: isCursor ? "white" : "black" }} />}
                // className="slick-prev"
                style={{ backgroundColor: isCursor ? "black" : "white" }}
                onMouseEnter={() => setIsCursor(true)}
                onMouseLeave={() => setIsCursor(false)}
                onClick={() => sliderRef.current.slickNext()}
            />
        );
    };

    // Slick Carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,

        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="container mt-5 mb-5" style={{ overflowX: "hidden" }}>
            <Row >
                <Col span={24} className='d-flex justify-content-between '>
                    <div>

                        <Title className='text-danger'>
                            <FiShoppingBag className="pe-2" size={40} color="red" /> Flash Sales
                        </Title>
                    </div>

                    <div className="d-flex gap-3 xs-me-auto sm-ms-auto">
                        <SampleNextArrow onClick={() => sliderRef.current.slickPrev()} />
                        <SamplePrevArrow onClick={() => sliderRef.current.slickNext()} />
                    </div>
                </Col>

            </Row>

            {/* React Slick Carousel */}
            <Slider ref={sliderRef} {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="p-2">
                        <div className="card shadow-sm border rounded position-relative" style={{ height:  "550px" }}>
                            {product.imageURL &&
                                <>
                                    <Image
                                        src={product.imageURL}
                                        alt="product"

                                        style={{
                                            width: "100%",
                                            height: "250px",
                                            objectFit: "cover",
                                            borderTopLeftRadius: '8px',
                                            borderTopRightRadius: '8px'
                                        }}
                                    />


                                    <div className="position-absolute" style={{ top: '10px', right: '10px', gap: "10px", display: "flex", flexDirection: "column" }}>
                                        <FiHeart className='z-1 fw-lighter' size={18} color="black" style={{ cursor: 'pointer' }} />
                                        <FiEye className="z-1 fw-lighter" size={18} color="black" onClick={() => navigate(`product/${product.id}`)} style={{ cursor: 'pointer' }} />
                                    </div>
                                    <div className="position-absolute translate-middle start-50" style={{ top: '222px', gap: "10px" }}>
                                        <button className='text-dark py-2 px-2' onClick={() => addToCart(product)} style={{ backgroundColor: "white", border: "none", cursor: "pointer" }}><span><FiShoppingCart title="Cart " className='me-2' size={12} />
                                        </span> Add To Cart</button>
                                    </div>
                                </>
                            }
                            <div className="p-2 text-center">
                                <Title level={5}>{product.productName}</Title>
                                <div className="d-flex justify-content-center gap-2">
                                    <p className='text-danger pe-3'>${product.price}</p>
                                    <del className='text-muted'>${product.originalPrice}</del>
                                </div>
                                <Paragraph className='pt-2 mb-2' ellipsis={{ rows: 2 }}>
                                    {product.description}
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <Row className='mt-5 mb-5'>
                <Col span={24}>
                    <Title className='text-center' style={{fontFamily:"cursive"}}>ALL Products</Title>
                </Col>
            </Row>
            <Row gutter={[24, 24]}>

                {products.map((product, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index} >
                        <div className="p-2">
                            <div className="card shadow-sm border rounded position-relative" style={{ height: "550px" }}>
                                {product.imageURL &&
                                    <>
                                        <Image
                                            src={product.imageURL}
                                            alt="product"

                                            style={{
                                                width: "100%",
                                                height: "400px",
                                                objectFit: "cover",
                                                borderTopLeftRadius: '8px',
                                                borderTopRightRadius: '8px'
                                            }}
                                        />


                                        <div className="position-absolute" style={{ top: '10px', right: '10px', gap: "10px", display: "flex", flexDirection: "column" }}>
                                            <FiHeart className='z-1 fw-lighter' size={18} color="black" style={{ cursor: 'pointer' }} />
                                            <FiEye className="z-1 fw-lighter" size={18} color="black" onClick={() => navigate(`product/${product.id}`)} style={{ cursor: 'pointer' }} />
                                        </div>
                                        <div className="position-absolute translate-middle start-50" style={{ top: '372px', gap: "10px" }}>
                                            <button className='text-white rounded-1 py-2 px-2' onClick={() => addToCart(product)} style={{ backgroundColor: "black", border: "1px solid orange", cursor: "pointer" }}><span><FiShoppingCart title="Cart " className='me-2' size={12} />
                                            </span> Add To Cart</button>
                                        </div>
                                    </>
                                }
                                <div className="p-2 text-center">
                                    <Title level={5}>{product.productName}</Title>
                                    <div className="d-flex justify-content-center gap-2">
                                        <p className='text-danger pe-3'>${product.price}</p>
                                        <del className='text-muted'>${product.originalPrice}</del>
                                    </div>
                                    <Paragraph className='pt-2 mb-2' ellipsis={{ rows: 2 }}>
                                        {product.description}
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default GetProducts;