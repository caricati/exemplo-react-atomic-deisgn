import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <button className="btn btn-primary">{ this.props.children }</button>
    )
  }
}