import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import 'antd/dist/antd.css'
import './CardList.css'

import Card from '../Card'

export default function CardList({ data, postRate }) {
  if (!data) {
    return
  } else {
    let element = data.map((el) => <Card el={el} key={uuidv4()} postRate={postRate} />)

    return <div className="cardList">{element}</div>
  }
}
