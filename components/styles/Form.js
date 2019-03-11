import styled, { keyframes } from 'styled-components';
import { media } from '../styles/MediaQueries';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: ${props => props.theme.borders};
  box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
  background: rgba(0, 0, 0, 0.02);
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;

  .img-form {
    width: 100%;
    display: flex;
    .img-container {
      width: 50%;
      ${media.mobile`width: 100%`}
    }
    .form-container {
      width: 50%;
      display: flex;
      align-items: center;
      ${media.mobile`width: 100%`}
    }
    ${media.mobile`flex-direction: column`}
  }

  h2 {
    font-size: 32px;
  }
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: ${props => props.theme.borders};
    border-bottom-left-radius: ${props => props.theme.borders};
  }
  label {
    display: block;
    margin: 24px 0px;
  }
  input,
  textarea,
  select {
    background-color: #f1f1f1;
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border-radius: ${props => props.theme.borders};
    border: 1px solid #e1e1e1;
    /* border: 1px solid black; */
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.primary};
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    border-radius: ${props => props.theme.button_borders};
    background: ${props => props.theme.button_color};
    color: white;
    border: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 24px;
    width: 100%;
    a &[disabled] {
      opacity: 0.5;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
