import { Card } from 'antd'
import Image from 'next/image'
const { Meta } = Card;

const CategoryProductCard = ({product}) => {
  return (
    <div className='container-fluid'>
             <div>



<Card
  hoverable
  style={{
    width: 240,
  }}
  cover={<Image alt="example" src={product?.image} width={100} height={200}/>}
>
  <Meta title={product?.ProductName}  />
  <div>
      <p>{product?.Description} </p>
      <span>{product?.Category}</span>
      <span style={{color:"red", paddingLeft:"10px"}}>{product?.Status}</span>
      <h5>{product?.Price}</h5>
        <button>Add To Build</button>
  </div>
</Card>


  </div>
    </div>
  )
}

export default CategoryProductCard