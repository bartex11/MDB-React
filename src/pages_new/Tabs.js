import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Container, Row, Col } from 'mdbreact';
import styled from 'styled-components';

import Headline from '../components/Headline';

const HeadlineStyled = styled(Headline)`

    color: tomato;
    border: 3px solid black;

`;

export default () => (
  <Container style={{marginTop: '3rem'}}>
    <Row>
      <Col>
        <Tabs style={{marginTop: '3rem'}}>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <HeadlineStyled animate title="LOL"/>
          </TabPanel>
          <TabPanel>
            <Headline />
          </TabPanel>
        </Tabs>
      </Col>
    </Row>
  </Container>
);
