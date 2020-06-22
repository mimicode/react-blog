import './Header.module.css'
import {Row,Col, Menu} from "antd"
import {HomeOutlined,VideoCameraOutlined,SmileOutlined} from '@ant-design/icons';

//公共顶部
export default ()=>(
    <div className="header">
        <div className="header-center">
            <Row justify="center">
                <Col xs={24} sm={24} md={13}  >
                    <span className="header-logo">技术胖</span>
                    <span className="header-txt">专注前端开发,每年100集免费视频。</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={11}>
                    {/* <Row justify="space-around">
                          <Col xs={0} sm={0} md={6}>
                                <HomeOutlined />主页
                          </Col>
                          <Col xs={0} sm={0} md={6}>
                                <VideoCameraOutlined />视频
                          </Col>
                          <Col xs={0} sm={0} md={6}>
                                <SmileOutlined />生活
                          </Col>
                    </Row> */}
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                        <HomeOutlined />
                            主页
                        </Menu.Item>
                        <Menu.Item key="video">
                        <VideoCameraOutlined />
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                        <SmileOutlined />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
        
    </div>
)