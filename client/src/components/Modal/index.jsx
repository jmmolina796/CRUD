import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Button,
  Content,
  Header,
  Body,
  Footer
} from './styledComponents';


export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.handleClick, true);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup',this.handleClick, true);
  }
  handleClick(e) {
    if (e.keyCode === 27) {
      this.props.close();
    }
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { header, children, footer, close } = this.props;
    return (
      <Wrapper onClick={close} onKeyUp={() => alert()}>
        <Button>X</Button>
        <Content onClick={e => e.stopPropagation()}>
          <Header>{header}</Header>
          <Body>{children}</Body>
          <Footer>{footer}</Footer>
        </Content>
      </Wrapper>
    )
  }
}

Modal.propTypes = {
  header: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
};
