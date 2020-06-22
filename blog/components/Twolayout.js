import { Row, Col } from "antd"
import "./Twolayout.module.css"
export default ({left,right})=>{
    return (
        <div className="layout-out">
            <div className="layout-main">
                <Row justify="center">
                    <Col xs={24} sm={24} md={18}>
                        {left}
                    </Col>
                    <Col xs={0} sm={0} md={6}>
                        {right}
                    </Col>
                </Row>
            </div>
        </div>

        

    )
}