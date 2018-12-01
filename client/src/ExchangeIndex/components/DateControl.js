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
                  <Input 
                    type="date" 
                    name="date" 
                    id="startDate" 
                    value={this.props.startDate}
                    placeholder="date placeholder" 
                    onChange={this.props.onChangeStartDate}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleDate">End Date</Label>
                  <Input 
                    type="date" 
                    name="date" 
                    id="endDate" 
                    value={this.props.endDate}
                    placeholder="date placeholder" 
                    onChange={this.props.onChangeEndDate}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <div className="buttons">
                  <Button color="primary">Submit</Button>
                  <Button color="secondary" onClick={this.props.onClearControls}>Clear</Button>
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
