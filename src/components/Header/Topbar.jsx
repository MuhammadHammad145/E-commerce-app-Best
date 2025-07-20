import React from 'react'
import { Col, Row,Typography } from 'antd'

const {Paragraph}=Typography
const Topbar = () => {
  return (
    <header className='bg-dark m-0 p-0'>
        <div className="container">
            <Row >
                <Col span={24}>
                <Paragraph className=' text-center text-white py-2 m-0'>Summer Sale For All Swim Suit And Free Express Delivery-OFF 50%!  Shop Now</Paragraph>
                </Col>
            </Row>
        </div>

    </header>
  )
}

export default Topbar