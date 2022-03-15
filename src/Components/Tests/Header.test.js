import React from "react";
import {shallow} from 'enzyme';
import  ReactDOM from 'react-dom';
import Header from "../Header";

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Header/>,div);
    ReactDOM.unmountComponentAtNode(div);
})

it('render without crashing 222',()=>{
    const header=document.createElement('header');
    ReactDOM.render(<Header/>,header);
    ReactDOM.unmountComponentAtNode(header);
})

it('render without crashing 222',()=>{
    const button=document.createElement('btnhdr');
    ReactDOM.render(<Header/>,button);
    ReactDOM.unmountComponentAtNode(button);
})