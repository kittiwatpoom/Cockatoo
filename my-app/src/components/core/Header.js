import React, { Component } from 'react'
import styled from 'styled-components'

const TextPD = styled.span`
font-size:10vw;
color:#fb9fa4;

`
const TextDS = styled.div`
font-size:10vw;
color:#fb9fa4;
margin-top:-0.7em;
`
const Pic = styled.img`
max-width:100%;
`

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-sm-10 col-lg-10">
                        <TextPD>
                            PRODUCT
                </TextPD>
                        <TextDS>
                            DESIGN
                </TextDS>
                <Pic src="/images/home1.jpg" class="img-fluid"></Pic>
                    </div>
                </div>
            </div>
        )
    }
}
