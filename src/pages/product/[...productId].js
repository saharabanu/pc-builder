import RootLayout from '@/components/Layout/RootLayout';
import React from 'react'

const ProductDetails = () => {
  return (
    <div>ProductDetails</div>
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