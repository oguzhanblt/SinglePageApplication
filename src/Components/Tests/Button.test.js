import React from "react";
import {shallow} from 'enzyme';
import  ReactDOM from 'react-dom';
import  Button from "../Button";

it('render without crashing 222',()=>{
    const button=document.createElement('btn');
    ReactDOM.render(<Button/>,button);
    ReactDOM.unmountComponentAtNode(button);
})