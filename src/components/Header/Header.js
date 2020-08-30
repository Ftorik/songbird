import {Col, Row} from "antd";
import logo from "../../images/LOGO.png";
import React from "react";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const Header = ({data}) => {
    return (
        <>
            <Row style={{marginTop: 5}}>
                <Col span={12}>
                    <img alt='test_image'
                         src={logo}
                         style={{borderTopLeftRadius: 20, marginBottom: -18, zIndex: -1, position: "relative"}}
                         width={120} height={100} />
                </Col>
                <Col span={12} style={{display: "flex", justifyContent: "flex-end", alignItems: 'flex-end'}}>
                    <div style={{color: 'white'}}>
                        Score: {data.score}
                    </div>
                </Col>
            </Row>
            <Breadcrumbs category={data.category}/>
        </>
    )
}

export default Header;