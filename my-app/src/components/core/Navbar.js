import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.span`
color:#fb9fa4;
text-align-last:center;
margin-right:35em;
`
const Navcolor = styled.nav`
background-color:#272f41;
padding:2em;
`
const ButtonNoBorder = styled.button`
border:none;
`

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            {/* ยังไม่ได้ใส่ */}
          </div>
          <Navcolor className="navbar navbar-dark">
            <ButtonNoBorder className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </ButtonNoBorder>
            <Text>Online boutique</Text>
          </Navcolor>
        </div>
      </div>
    )
  }
}
