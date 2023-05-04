import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='wrapper-item'>
        <div className='Item'>
            <img src= {"./img/" + this.props.item.img}/>
              <h2>{this.props.item.title}</h2>
              <p>{this.props.item.subtitle}</p>
              <b>{this.props.item.price}</b>
        </div>
      </div>  
      
    )
  }
}

export default Item