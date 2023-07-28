import RootLayout from '@/components/Layout/RootLayout';


const HomePage = () => {
  return (
    <div> This is Homepage</div>
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