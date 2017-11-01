import React, { Component } from 'react'

import { Header } from '../../organinsms/header'

export class MainTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container mt-5">
          { this.props.children }
        </main>
      </div>
    )
  }
}