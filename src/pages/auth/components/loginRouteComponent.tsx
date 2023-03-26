import { Button, Col, Divider, Form, Image, Row } from "antd";
import { Fragment, useCallback, useState } from "react";
import faceIcon from "@assets/images/icon/fb-icon.png";
import googleIcon from "@assets/images/icon/google-icon.png";
import linkedinIcon from "@assets/images/icon/linkedin.png";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { LoginSocialGoogle, IResolveParams } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";

const LoginRouteComponent = () => {
  const clientId =
    "1083253828981-7tsua0epl0t4mrl99sushcbhgcd3iv9f.apps.googleusercontent.com";

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
              <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {}}
                  onError={() => {
                    console.log("Login Failed");
                  }}
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
