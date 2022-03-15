import React from "react";
import {shallow} from 'enzyme';
import  ReactDOM from 'react-dom';
import InputItem from "../InputItem";

it('render without crashing InputItem-1',()=>{
    const form=document.createElement('form');
    ReactDOM.render(<InputItem/>,form);
    ReactDOM.unmountComponentAtNode(form);
})
it('renders without crashing InputItem-2',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<InputItem/>,div);
    ReactDOM.unmountComponentAtNode(div);
})