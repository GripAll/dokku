import React from 'react';

const ClipboardButton = ({ text }) => {
  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard: ' + text);
  };

  return <button onClick={copyToClipboard}>Copy My Discord contact!</button>;
};

export default ClipboardButton;
