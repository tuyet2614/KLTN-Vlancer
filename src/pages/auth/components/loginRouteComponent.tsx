import { Button, Col, Divider, Form, Image, Row } from "antd";
import { Fragment, useCallback, useState } from "react";
import faceIcon from "@assets/images/icon/fb-icon.png";
import googleIcon from "@assets/images/icon/google-icon.png";
import linkedinIcon from "@assets/images/icon/linkedin.png";
import { LoginSocialGoogle, IResolveParams } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";

const LoginRouteComponent = () => {
  const clientId =
    "1083253828981-fks1m2ggmp4sgdf0rk60n6p5683tmpfg.apps.googleusercontent.com";
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const REDIRECT_URI = "http://localhost:3002/auth/login";
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
              <LoginSocialGoogle
                client_id={clientId || ""}
                onLoginStart={onLoginStart}
                redirect_uri={REDIRECT_URI}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }: IResolveParams) => {
                  console.log("success");

                  setProvider(provider);
                  setProfile(data);
                }}
                onReject={(err: any) => {
                  console.log(err);
                }}
              >
                <GoogleLoginButton />
              </LoginSocialGoogle>
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
