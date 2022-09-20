import React from 'react';

const Link = ({originalLink, shortLink}) => {

    const copyLink = (e) => {
        navigator.clipboard.writeText(shortLink); 
        e.target.value = 'Copied!'; 
        e.target.style.backgroundColor = ' hsl(257, 27%, 26%)'; 
    }

  return (
    <li className='short-link'>
        <p className="link">{originalLink}</p>
        <span className="copy-short-link">
          <p className="link">{shortLink}</p>
          <input type='button' onClick={copyLink} value="Copy"/>
        </span>
    </li>
  )
}

export default Link;