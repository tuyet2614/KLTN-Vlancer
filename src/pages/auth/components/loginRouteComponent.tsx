import { Button, Col, Divider, Form, Image, Row } from "antd"
import { Fragment } from "react"
import faceIcon from "@assets/images/icon/fb-icon.png";
import googleIcon from "@assets/images/icon/google-icon.png";
import linkedinIcon from "@assets/images/icon/linkedin.png";

const LoginRouteComponent = () => {
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
                  <Button>
                    <Image src={googleIcon} preview={false} className="icon" />
                    <span className="text-[#757575]">Google</span>
                  </Button>
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item className="login-item">
                  <Button className="!bg-[#006699]">
                    <Image
                      src={linkedinIcon}
                      preview={false}
                      className="icon"
                    />
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
    )
}

export default LoginRouteComponent