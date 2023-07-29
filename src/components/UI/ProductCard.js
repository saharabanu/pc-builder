import { Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;

const ProductCard = () => {
  return (
    <div>

  <Link href= "/">
  {/* href= {`/product/${news?.id}`} */}
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp242c/pro-mp242c-01-200x200.webp" />}
  >
    <Meta title="Europe Street beat"  />
    <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <h5>$345</h5>
    </div>
  </Card>
  </Link>

    </div>
  )
}

export default ProductCard