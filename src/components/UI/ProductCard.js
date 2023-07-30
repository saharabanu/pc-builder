import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({product}) => {
  return (
    <div>

  <Link href= {`/products/${product?._id}`}>
 
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<Image alt="example" src={product?.image} width={100} height={130}/>}
  >
    <Meta title={product?.ProductName}  />
    <div>
        
        <span>{product?.Category}</span>
        <span style={{color:"red", paddingLeft:"10px"}}>{product?.Status}</span>
        <h5>{product?.Price}</h5>
        <p><AiFillStar style={{color:"#764ABC"}} /> {(
                    product?.Reviews?.reduce(
                      (acc, review) => acc + review.IndividualRating,
                      0
                    ) / product?.Reviews.length
                  ).toFixed(1)}</p>

    </div>
  </Card>
  </Link>

    </div>
  )
}

export default ProductCard;