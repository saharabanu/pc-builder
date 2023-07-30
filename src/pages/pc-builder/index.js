import RootLayout from "@/components/Layout/RootLayout";
import Heading from "@/components/UI/Heading";
import PcBuilderProductCategories from "@/components/UI/PcBuilderProductCategories";
import { clearBuilder } from "@/redux/features/builderSlice";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";



const PCBuilder = () => {
  const dispatch = useDispatch()
  // redux state
  const builderState = useSelector((state) => state.builder.selectedProducts);

  // handle complete pc builder function
  const handleCompleteBuild = () => {
    swal("PC Build Completed!", "Hurray", "success");
    dispatch(
      clearBuilder({
        cpu: null,
        ram: null,
        monitor: null,
        storage: null,
        motherboard: null,
        powersupply: null,
        others: null,
      })
    );
  };
 

  return (
    <div className="container-fluid">
      <Heading title={"PC Builder"} />

      <div style={{background:"#fff", border:"1px solid #000", maxWidth:"70%", borderRadius:"5px", margin:"0 auto", padding:"20px ", marginTop:"5%"}}>
         <div style={{background:"#6F6F6F", padding:"5px 10px", }}>
            <h1>Choose Products</h1>
            <p >PC Builder - Build Your Dream PC!</p>
          </div>

          {Object.entries(builderState).every(
            ([key, value]) => key === "others" || value !== null
          ) ? (
            <button
              onClick={handleCompleteBuild}
              type="button"
              className="py-2 px-4 border border-transparent md:text-[16px] text-[12px] font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
            >
              Complete Build
            </button>
          ) : (
            <button
              disabled
              type="button"
              className="py-2 px-4 border border-transparent md:text-[16px] text-[12px] font-medium rounded-md text-white bg-red-300"
            >
              Complete Build
            </button>
          )}

         <PcBuilderProductCategories/>



      </div>

      
    </div>
  );
};

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PCBuilder;
