import React from 'react';

const Link = ({originalLink, shortLink}) => {

    const copyLink = (e) => {
        navigator.clipboard.writeText(shortLink); 
        e.target.value = 'Copied!'; 
        e.target.style.backgroundColor = 'hsl(260, 8%, 14%)'; 
    }

  return (
    <li>
        <p className="link">{originalLink}</p>
        <div className="copy-short-link">
          <p className="link">{shortLink}</p>
          <input type='button' onClick={copyLink} value="Copy"/>
        </div>
    </li>
  )
}

export default Link;