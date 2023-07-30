import RootLayout from "@/components/Layout/RootLayout";
import Heading from "@/components/UI/Heading";
import PcBuilderProductCategories from "@/components/UI/PcBuilderProductCategories";



const PCBuilder = () => {
  
 
 

  return (
    <div className="container-fluid">
      <Heading title={"PC Builder"} />

      <div style={{background:"#fff", border:"1px solid #000", maxWidth:"70%", borderRadius:"5px", margin:"0 auto", padding:"20px ", marginTop:"5%"}}>
         <div style={{background:"#6F6F6F", padding:"5px 10px", }}>
            <h1>Choose Products</h1>
            <p >PC Builder - Build Your Dream PC!</p>
          </div>

         <PcBuilderProductCategories/>



      </div>

      
    </div>
  );
};

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PCBuilder;
