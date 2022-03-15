import { render, screen } from '@testing-library/react';
import App from './App';
import  ReactDOM from 'react-dom';



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Link Vote App/i);
  expect(linkElement).toBeInTheDocument();

});

it('render without crashing 222',()=>{
  const header=document.createElement('header');
  ReactDOM.render(<App/>,header);
  ReactDOM.unmountComponentAtNode(header);
})
