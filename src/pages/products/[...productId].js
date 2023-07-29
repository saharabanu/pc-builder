import RootLayout from '@/components/Layout/RootLayout';
import React from 'react'

const ProductDetails = () => {
  return (
    <div className='container-fluid'>
     
          <div >
            <div></div>
            <div></div>
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