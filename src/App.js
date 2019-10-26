import React from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import Navbar from './containers/Navbar'
import Banner from './components/Banner'

class App extends React.Component {
  state = {
    data: {},
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const { data } = await axios.get('https://panjs.com/ywc.json')
    this.setState({ data })
    console.log('data', data)
  }

  render() {
    const { data } = this.state
    const {
      navbarItems, condition = '', detail, duration,
    } = data
    return (
      <>
        <Navbar items={navbarItems} />
        <Banner />
        <Container>
          <div style={{ marginBottom: 24 }}>{duration}</div>
          <div style={{ marginBottom: 24 }}>
            {condition.split('<br>').map((item, index) => (
              <p key={`condition${index}`}>{item}</p>
            ))}
          </div>
          <div style={{ marginBottom: 24 }}>{detail}</div>
        </Container>
      </>
    )
  }
}

export default App
