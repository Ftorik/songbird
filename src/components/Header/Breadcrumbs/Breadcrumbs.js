import {Col, Row} from "antd";
import React from "react";

const Breadcrumbs = () => {
    return (
        <Row className='breadcrumbs_container'>
            <Col className='breadcrumbs_item current'>TvShow</Col>
            <Col className='breadcrumbs_item'>Series</Col>
            <Col className='breadcrumbs_item'>Movies</Col>
            <Col className='breadcrumbs_item'>Cartoons</Col>
            <Col className='breadcrumbs_item'>Anime</Col>
            <Col className='breadcrumbs_item'>Games</Col>
        </Row>
    )
}

export default Breadcrumbs;