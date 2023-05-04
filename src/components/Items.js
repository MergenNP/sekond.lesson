import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        <h1>Каталог</h1>
        <div className='container-main'>
        {this.props.items.map(el=>(
        <Item item={el}/>
        ))}

        </div>
      </main>
    )
  }
}

export default Items