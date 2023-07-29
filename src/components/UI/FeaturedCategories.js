import { Col, Row } from "antd"


const FeaturedCategories = () => {
  return (
    <div className="container-fluid">

<div style={{display:"flex", justifyContent:'center', alignItems:"center", padding:'10px 0px', fontWeight:'bold'}}>
<h2>Featured Categories</h2>
    </div>
    <Row gutter={[8, 8]}>
  <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:4}} >
  <div style={{background:"#fff",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
          <h5 style={{textAlign:"center",padding:"40px 10px"}}> Categories</h5>
  </div>
  
  </Col>
  <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:4}} >
  <div style={{background:"#fff",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
          <h5 style={{textAlign:"center",padding:"40px 10px"}}> Categories</h5>
  </div>
  
  </Col>
  
</Row>

    </div>
  )
}

export default FeaturedCategories