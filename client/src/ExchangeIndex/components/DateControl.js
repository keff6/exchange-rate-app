import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class DateControl extends Component {
  render() {
    return (
      <Row className="controls-container">
        <Col md={12}>
          <Form onSubmit={this.props.onSubmit}>
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleDate">Start Date</Label>
                  <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" onChange={this.props.onChangeStartDate}/>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleDate">End Date</Label>
                  <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" onChange={this.props.onChangeEndDate}/>
                </FormGroup>
              </Col>
              <Col md={6}>
                <div className="buttons">
                  <Button color="primary">Submit</Button>
                  <Button color="secondary">Clear</Button>
                </div>                
              </Col>
            </Row>
          </Form>
        </Col>    
      </Row>
    );
  }
}

export default DateControl;
