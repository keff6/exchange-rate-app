import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const DateControl = (props) => (
  <Row className="controls-container">
    <Col md={12}>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleDate">Start Date</Label>
              <Input 
                type="date" 
                name="date" 
                id="startDate" 
                value={props.startDate}
                placeholder="date placeholder" 
                onChange={props.onChangeStartDate}
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
                value={props.endDate}
                placeholder="date placeholder" 
                onChange={props.onChangeEndDate}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <div className="buttons">
              <Button color="primary">Submit</Button>
              <Button color="secondary" onClick={props.onClearControls}>Clear</Button>
            </div>                
          </Col>
        </Row>
      </Form>
    </Col>    
  </Row>
);

DateControl.propTypes = {
  onSubmit: PropTypes.func,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  onChangeStartDate: PropTypes.func,
  onChangeEndDate: PropTypes.func,
  onClearControls: PropTypes.func,
}

export default DateControl;
