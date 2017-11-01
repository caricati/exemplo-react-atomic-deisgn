import React, { Component } from 'react'

import { Input } from '../../atoms/input'
import { Button } from '../../atoms/button'

export class SearchKeyword extends Component {
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <Input />
        <Button>Pesquisar</Button>
      </form>
    )
  }
}