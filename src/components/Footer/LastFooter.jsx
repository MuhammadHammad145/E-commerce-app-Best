import React from 'react';
import { Col, Divider, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

const LastFooter = () => {
    const year=new Date().getFullYear()
  return (
    <footer className='bg-dark mt-0 p-0'>
        <hr  style={{color:"#2f4f4f"}}/>
        <div className="container">
            <Row>
                <Col span={24}>
                <Paragraph className='text-center  py-2' style={{color:"#2f4f4f"}}>&copy; {year} All rights are reserved.</Paragraph>
                </Col>
            </Row>
        </div>
    </footer>
  )
}

export default LastFooter