import { Col, Row } from "antd"
import ProductCard from "./ProductCard"


const FeaturedProduct = ({products}) => {
  return (
    <div className="container-fluid">

    <div style={{display:"flex", justifyContent:'center', alignItems:"center", padding:'10px 0px', fontWeight:'bold'}}>
        <h2 style={{color:"#764ABC", fontWeight:"bold", paddingBottom:"10px"}}>Featured Products</h2>
    </div>


    <Row gutter={[16, 16]}>
    {products?.map((product,i) => (<>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} key={i}><ProductCard product={product}/></Col>
    </>))}
  
  
  
</Row>



    </div>
  )
}

export default FeaturedProduct