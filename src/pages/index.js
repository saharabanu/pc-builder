import RootLayout from '@/components/Layout/RootLayout';
import Banner from '@/components/UI/Banner';
import FeaturedProduct from '@/components/UI/FeaturedProduct';


const HomePage = () => {
  return (
    <> 
    <Banner/>
    <FeaturedProduct/>
    
    </>
  )
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
   <RootLayout>
    {page}
   </RootLayout>
  )
}