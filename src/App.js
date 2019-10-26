import React from 'react'
import axios from 'axios'
import Navbar from './containers/Navbar'
import Banner from './components/Banner'
import ContentTop from './components/ContentTop'
import ContentBottom from './components/ContentBottom'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    data: {},
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const { data } = await axios.get('https://panjs.com/ywc.json')
    data.navbarItems[0].key = 'regis'
    data.navbarItems[1].key = 'howto'
    data.navbarItems[2].key = 'shops'
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
        <ContentTop duration={duration} />
        <ContentBottom detail={detail} condition={condition} />
        <Footer items={navbarItems} />
      </>
    )
  }
}

export default App
