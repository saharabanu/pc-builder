import RootLayout from "@/components/Layout/RootLayout";
import { Button } from "antd";
import {
    GoogleOutlined,GithubOutlined
  } from '@ant-design/icons';
import { signIn } from "next-auth/react";


const LoginPage = () => {
  return (
    <div className="container-fluid">
    <div style={{display:"flex", justifyContent:'center', alignItems:"center", padding:'10px 0px', fontWeight:'bold' }}>
    
            <div style={{maxWidth:'500px', margin:'15% 0', background:"#160C0E", padding:'40px', borderRadius:"10px", color:"#fff"}}>
                <h4>SignIn with Google or Github</h4>

                <div>
                <Button type="primary" onClick={()=> signIn('google',{
            callbackUrl: "http://localhost:3000/"
          })}> <GoogleOutlined /> Google</Button>
                <Button type="primary" style={{marginLeft:'5px'}} onClick={()=> signIn('github',{
            callbackUrl: "http://localhost:3000/"
          })}>  <GithubOutlined />Github</Button>
                </div>
                {/* //<LogoutOutlined /> */}


            </div>
    </div>

    </div>
  )
}

export default LoginPage;
LoginPage.getLayout = function getLayout(page) {
    return (
     <RootLayout>
      {page}
     </RootLayout>
    )
  }