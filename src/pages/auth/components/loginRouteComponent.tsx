import { Button, Col, Divider, Form, Image, Row } from "antd";
import { Fragment, useCallback, useEffect, useState } from "react";
import faceIcon from "@assets/images/icon/fb-icon.png";
import googleIcon from "@assets/images/icon/google-icon.png";
import linkedinIcon from "@assets/images/icon/linkedin.png";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginRouteComponent = () => {
  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  console.log("user: ", user);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

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
              {/* <GoogleOAuthProvider clientId={clientId}> */}
              {/* <GoogleLogin
                onSuccess={(credentialResponse: any) => {
                  console.log("creditttt: ", credentialResponse);
                  setUser(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              /> */}
              {/* </GoogleOAuthProvider> */}
              {/* <Link to="/api/auth/google/callback"> */}
              <Button onClick={() => login()}>
                <Image src={googleIcon} preview={false} className="icon" />
                <span className="">Google</span>
              </Button>
              {/* </Link> */}
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
