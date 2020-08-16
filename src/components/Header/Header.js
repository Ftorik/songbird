import {Col, Row} from "antd";
import logo from "../../images/LOGO.png";
import React from "react";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const Header = () => {
    return (
        <>
            <Row style={{marginTop: 5}}>
                {/*Header Logo left*/}
                <Col span={12}>
                    <img alt='test_image'
                         src={logo}
                         style={{borderTopLeftRadius: 20, marginBottom: -18, zIndex: -1, position: "relative"}}
                         width={120} height={100} />
                </Col>
                {/*Header Score right*/}
                <Col span={12} style={{display: "flex", justifyContent: "flex-end", alignItems: 'flex-end'}}>
                    <div style={{color: 'white'}}>
                        Score: 0
                    </div>
                </Col>
            </Row>
            <Breadcrumbs />
        </>
    )
}

export default Header;