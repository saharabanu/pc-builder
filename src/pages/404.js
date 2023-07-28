import { Button } from 'antd';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 5000);
  return (
    <>
    {/* style={{background:'#000', paddingBottom:'20px'}} */}
      <div >
            <div >
            <Image src="https://img.freepik.com/premium-vector/404-error-connection-found-failure-download-interface-information-internet-banner-landing-page-isometric-vector-illustration-software-communication-fail-caution-defect-problem-message_93487-1086.jpg" alt="Not Found" width={500} height={500} style={{minWidth:'100%', minHeight:'100vh'}}/>
            </div>

            {/* <Button type="primary" style={{alignContent:"center"}}>
            <Link href= "/">Back Home</Link>
        </Button> */}
      </div>

    </>
  )
}

export default NotFoundPage