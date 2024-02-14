import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatInput from './ChatInput';

describe('ChatInput component', () => {
  test('renders input and button', () => {
    render(<ChatInput send={() => {}} handleInput={() => {}} inputMsg="" />);
    
    // Check if the input and button elements are present
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // test('handles input changes', () => {
  //   const handleInputMock = jest.fn();
  //   render(<ChatInput send={() => {}} handleInput={handleInputMock} inputMsg="" />);
    
  //   // Simulate user input
  //   fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test message' } });
    
  //   // Check if the handleInput function is called with the correct value
  //   expect(handleInputMock).toHaveBeenCalledWith('test message');
  // });

  test('handles "Enter" key press', () => {
    const sendMock = jest.fn();
    render(<ChatInput send={sendMock} handleInput={() => {}} inputMsg="" />);
    
    // Simulate "Enter" key press
    fireEvent.keyDown(screen.getByRole('textbox'), { keyCode: 13 });
    
    // Check if the send function is called
    expect(sendMock).toHaveBeenCalled();
  });

  test('handles button click', () => {
    const sendMock = jest.fn();
    render(<ChatInput send={sendMock} handleInput={() => {}} inputMsg="" />);
    
    // Simulate button click
    fireEvent.click(screen.getByRole('button'));
    
    // Check if the send function is called
    expect(sendMock).toHaveBeenCalled();
  });

  // Add more tests as needed
});