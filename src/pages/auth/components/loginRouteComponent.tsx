import { Button, Col, Divider, Form, Image, Row } from "antd";
import { Fragment } from "react";
import faceIcon from "@assets/images/icon/fb-icon.png";
import googleIcon from "@assets/images/icon/google-icon.png";
import linkedinIcon from "@assets/images/icon/linkedin.png";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
const handleGoogleLoginSuccess = (response: any) => {
  // TODO: get user data from response
  alert(`Welcome ${response.profileObj.name}!`);
};

const handleGoogleLoginFailure = (response: any) => {
  // TODO: handle login failure
  console.log("response: ", response);
};

const LoginRouteComponent = () => {
  const clientId =
    "1083253828981-fks1m2ggmp4sgdf0rk60n6p5683tmpfg.apps.googleusercontent.com";
  return (
    <Fragment>
      <div>
        <Row>
          <Col span={24}>
            <Form.Item className="login-item">
              <Button className="!bg-[#1877f2]">
                <Image src={faceIcon} preview={false} className="icon" />
                <span className="text-white">Facebook</span>
              </Button>
            </Form.Item>
          </Col>
        </Row>

        <Row className="flex justify-between ">
          <Col span={11}>
            <Form.Item className="login-item">
              {/* <Button>
                    <Image src={googleIcon} preview={false} className="icon" />
                    <span className="text-[#757575]">Google</span>
                  </Button> */}
              <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                  // clientId={clientId}
                  // buttonText="Log in with Google"
                  onSuccess={handleGoogleLoginSuccess}
                  // onFailure={handleGoogleLoginFailure}
                  // cookiePolicy={"single_host_origin"}
                />
              </GoogleOAuthProvider>
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item className="login-item">
              <Button className="!bg-[#006699]">
                <Image src={linkedinIcon} preview={false} className="icon" />
                <span className="text-white">Linkedin</span>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </div>
      <Divider plain className="text-[#cccccc]">
        or
      </Divider>
    </Fragment>
  );
};

export default LoginRouteComponent;
