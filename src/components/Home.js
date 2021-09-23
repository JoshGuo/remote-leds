import React from 'react';
import '../css/Home.css';
import axios from 'axios';
import {Container} from 'react-materialize';
import CurrentSetting from './CurrentSetting';
import LEDForm from './LEDForm';
import Footer from './Footer';

const styles = {
  header: {
    backgroundColor: '#10131a',
    fontSize: 'calc(25pt + (50 - 25) * ((100vw - 300px) / (1920 - 300)))'
  }
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            loadingCurr: true,
            currentMode: {
                mode: "-1",
                name: "default"
            }
        }
        this.apiDomain = "https://remote-leds.herokuapp.com/queue";
    }

    componentDidMount() {
        this.getCurrentMode();
        setInterval(this.getCurrentMode, 5000);
    }

    getCurrentMode = () => {
        axios.get(this.apiDomain).then((res) => {
            this.setState({
                loadingCurr: false,
                currentMode: res.data.currentMode
            })
        });
    }

    render() {
        return (
            <div className="Home">
              <div style={styles.header}>
                <div style={{display:"inline-block"}}>
                  led stuff
                </div>
              </div>
              <Container>
                <CurrentSetting isLoading={this.state.loadingCurr} setting={this.state.currentMode}/>
                <LEDForm/>
              </Container>
              <Footer/>
            </div>
        );
    }
}

export default Home;