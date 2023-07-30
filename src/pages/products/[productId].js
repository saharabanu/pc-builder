import RootLayout from '@/components/Layout/RootLayout';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react'

const ProductDetails = ({product}) => {
  
  return (
    <div className='container-fluid' style={{paddingTop:"30px"}} >

<Row gutter={[8, 16]}>
  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} xl={{span:12}} >

  <Image alt="example" src={product?.image} width={500} height={500}/>
  </Col>
  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} xl={{span:12}} >
    <h2>{product?.ProductName}</h2>
    <p>{product?.Description} </p>
        <span>{product?.Category}</span>
  </Col>
</Row>
     
          

    </div>
  )
}

export default ProductDetails;
ProductDetails.getLayout = function getLayout(page) {
  return (
   <RootLayout>
    {page}
   </RootLayout>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-sage.vercel.app/api/products");
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-sage.vercel.app/api/products?productId=${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};
