import RootLayout from '@/components/Layout/RootLayout';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react'
import StarRatings from 'react-star-ratings';

const ProductDetails = ({product}) => {
  const sumOfRatings = product?.Reviews.reduce(
    (total, review) => total + review.IndividualRating,
    0
  );
  const averageRating = sumOfRatings / product?.Reviews.length;
  
  return (
    <div className='container-fluid' style={{paddingTop:"50px"}} >

<Row gutter={[8, 16]}>
  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} xl={{span:12}} >

  <Image alt="example" src={product?.image} width={500} height={500}/>
  </Col>
  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} xl={{span:12}} >
    <h2>{product?.ProductName}</h2>
    <span>{product?.Category}</span>
    <h3>{product?.Status}</h3>
    <p>{product?.Description} </p>

    <ul>
    {Object?.keys(product?.KeyFeatures)?.length > 0 ? (
          Object?.keys(product?.KeyFeatures)?.map((key, i) => {
            return (
              <div key={i} className="flex items-center mb-[7px]">
                <p className="md:text-[16px] text-[14px] font-bold mr-1.5">
                  {key.replace(/([a-z](?=[A-Z]))/g, "$1 ")}:
                </p>
                <li className="md:text-[16px] text-[14px]">
                  {product?.KeyFeatures[key]}
                </li>
              </div>
            );
          })
        ) : (
          <p className="font-bold md:text-[16px] text-[14px]">
            No Features Available!
          </p>
        )}
    </ul>
    <h3 className="font-[500] md:text-[16px] text-[14px] mr-1.5">
            Avg. Rating:
          </h3>
          <div className="flex items-center">
            <StarRatings
              rating={averageRating}
              starRatedColor="#764ABC"
              numberOfStars={5}
              starDimension="16px"
              starSpacing="2px"
            />
            <p className="ml-1.5">({averageRating})</p>
            </div>
        
  </Col>
</Row>
     
          
     <div className="ml-[20px]">
        <h2 className="mt-[14px] mb-[12px] font-bold md:text-[20px] text-[14px]">
          Reviews
        </h2>
        {product?.Reviews?.length > 0 ? (
          product?.Reviews?.map((review, i) => {
            return (
              <div key={i} className="mb-[10px]">
                <div className="flex items-start">
                  <div className="bg-gray-600 h-[30px] w-[30px] rounded-[50%] mr-[12px]" />
                  <div>
                    <h3 className="font-bold">{review?.Name}</h3>
                    {/* Rating show here */}
                    <div className="flex items-center">
                      <StarRatings
                        rating={review?.IndividualRating}
                        starRatedColor="#764ABC"
                        numberOfStars={5}
                        starDimension="16px"
                        starSpacing="2px"
                      />
                      <p className="text-[14px] ml-1.5">
                        ({review?.IndividualRating})
                      </p>
                    </div>
                  </div>
                </div>
                <p className="md:text-[16px] text-[14px] ml-[42px]">
                  {review?.Comment}
                </p>
              </div>
            );
          })
        ) : (
          <p className="font-bold md:text-[16px] text-[14px]">No Reviews!</p>
        )}
      </div>
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
