import React from 'react'
import Commerce from '@chec/commerce.js'
import start from '../apis/api'

let commerce = null

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      shopData: []
    }
  }

  componentDidMount(){
    start()
      .then(() => {
        commerce = new Commerce(process.env.API_KEY, true)
        commerce.products.list()
          .then(data => {
            this.setState({
              shopData: data.data
            })
          })
      })
  }


render(){
  return (
    <>
      {
        this.state.shopData.map(item => {
          return(
            <>
            <img src={item.media.source} alt="ulalala"/>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.price.formatted_with_symbol}</p>
            </>
          )
        })
      }
    </>
  )
}
}

export default App
