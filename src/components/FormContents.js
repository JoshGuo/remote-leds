import React from 'react';
import {Button, Row, Col, Container} from 'react-materialize';
import '../css/FormContents.css'

class FormContents extends React.Component {
    constructor(props) {
        super(props);

        this.descriptions = [
            "turn off the lights",
            "set the lights to a specific color",
            "a nice gradient of colors",
            "do not use this one"
        ]

        this.name = React.createRef();
        this.color = React.createRef();
    }

    formSubmission = (type, fadeType) => {
        if (type === 0) {
          this.props.sendFormCallback(
              this.props.activeForm,
              this.name.current.value === "" ? " " : this.name.current.value
          );
        }else if (type === 1) {
          this.props.sendFormCallback(
              this.props.activeForm, 
              this.name.current.value === "" ? " " : this.name.current.value,
              this.color.current.value.toUpperCase()
          );
        }else if (type === 2) {
          this.props.sendFormCallback(
            this.props.activeForm,
            this.name.current.value === "" ? " " : this.name.current.value,
            null,
            fadeType
          )
        }
    }

    renderForm = () => {
        switch(this.props.activeForm) {
            case -3: return this.renderCompletedForm();
            case -2: return <p></p>
            case -1: return this.renderGenericForm();
            case 0: return this.renderColorPickerForm();
            case 1: return this.renderFadeForm();
            case 2: return this.renderGenericForm();
            default: return <p>There has been an error</p>
        }
    }

    renderGenericForm() {
        let index = this.props.activeForm + 1;

        return(
            <div className="FormContents">
                <Row>
                    <h6>{this.descriptions[index]}</h6>
                </Row>
                <Row>
                    Message: <input style={{margin: "0 1rem", width: "25%", color: "white"}} ref={this.name} type="text" placeholder="hi" defaultValue=""/> 
                </Row>
                <Row>
                    <Button style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                        waves="green" 
                        onClick={() => this.formSubmission(0)}>
                        Submit
                    </Button>
                </Row>
            </div>
        );
    }

    renderColorPickerForm() {
        let index = this.props.activeForm + 1;
        return(
            <div className="FormContents">
                <Row>
                    <h6>{this.descriptions[index]}</h6>
                </Row>
                <Row>
                    Message: <input style={{margin: "0 1rem", width: "25%", color: "white"}} ref={this.name} type="text" placeholder="colors" defaultValue=""/> 
                </Row>
                <Row>
                    Color: <input style={{margin: "0 1rem"}} ref={this.color} type="color" defaultValue="#FFFFFF"/> 
                </Row>
                <Row>
                    <Button style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                        waves="green" 
                        onClick={() => this.formSubmission(1)}>
                        Submit
                    </Button>
                </Row>
            </div>
        );
    }

    renderFadeForm() {
      let index = 2;
      return(
        <div className="FormContents">
            <Row>
                <h6>{this.descriptions[index]}</h6>
            </Row>
            <Row>
                Message: <input style={{margin: "0 1rem", width: "25%", color: "white"}} ref={this.name} type="text" placeholder="rainbow stuff" defaultValue=""/> 
            </Row>
            <Container>
              <Row>
                  <Button sx={{ m: 0.5 }} style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                    waves="green" 
                    onClick={() => this.formSubmission(2, 0)}>
                    Rainbow
                  </Button>
                  <Button sx={{ m: 0.5 }} style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                    waves="green" 
                    onClick={() => this.formSubmission(2, 1)}>
                    Cool
                  </Button>
                  <Button  style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                    waves="green" 
                    onClick={() => this.formSubmission(2, 2)}>
                    Warm
                  </Button>
              </Row>
            </Container>
        </div>
    );
    }

    renderCompletedForm() {
        return(
            <div className="FormContents">
                <Row>
                    <h5>leds sent!</h5>
                </Row>
                <Row>
                    <h6>Give a few second for the LEDs settings to update</h6>
                </Row>
                <Row>
                    <Button style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                        waves="green" 
                        onClick={() => this.props.changeFormCallback(-2)}>
                        OK
                    </Button>
                </Row>
            </div>
        );
    }

    render() {
        return this.props.isLoading ? <div>Sending...</div> : this.renderForm();
    }
}

export default FormContents;