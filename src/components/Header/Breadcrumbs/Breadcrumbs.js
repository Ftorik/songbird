import {Col, Row} from "antd";
import React from "react";

const categories = ['Аниме', 'Сериалы', 'Фильмы', 'Мультики', 'ТВ шоу', 'Игры'];

const Breadcrumbs = ({category}) => {
    console.log('Breadcrumbs - category:', category)
    return (
        <Row className='breadcrumbs_container'>
            {
                categories.map((item, index) => {
                    return (
                        <Col className={category === index ? 'breadcrumbs_item current' : 'breadcrumbs_item'}>
                            {item}
                        </Col>)
                })
            }
        </Row>
    )
}

export default Breadcrumbs;