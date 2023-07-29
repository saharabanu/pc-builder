import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;

const ProductCard = ({product}) => {
  return (
    <div>

  <Link href= {`/products/${product?._id}`}>
  {/* href= {`/product/${news?.id}`} */}
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

    </div>
  </Card>
  </Link>

    </div>
  )
}

export default ProductCard;