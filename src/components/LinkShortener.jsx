import React, { useState } from 'react';
import Link from './Link';
import { v4 as uuidv4 } from 'uuid';

const LinkShortener = () => {
  const [links, setLinks] = useState([]);
  const [originalLink, setOriginalLink] = useState('');

  const shortenLink = (e) => {
    e.preventDefault();
      if (originalLink === '') {
        document.getElementById('form-error').innerText = 'Please add a Link';
        document.querySelector('.input-field input').classList.add('error');
      } else {
        console.log('Shortening URL')
        fetch(`https://api.shrtco.de/v2/shorten?url=${originalLink}`).catch(error => console.log(error))
        .then(res => {
          console.log(res.status);
          if(res.status >= 400) {
            alert('Invalid Link Please Enter a Valid URL');
            console.log('Invalid URL, Please Enter a Valid URL..');
          } else {
            return res.json();
          }
          })
        .then(data => { 
          document.getElementById('form-error').innerText = '';
          document.querySelector('.input-field input').classList.remove('error');

          setLinks([
              ...links,
              { original_link: data.result.original_link, short_link: data.result.full_short_link }
            ]);
            setOriginalLink('') 
      });

      }
  }

  return (
    <div className='link-shortener'>
      <form>
        <div className="input-field">
          <input type="text" placeholder='Shorten a link here...' value={originalLink} onChange={(e) => { setOriginalLink(e.target.value); console.log(originalLink); }}/>
          <small id='form-error'></small>
        </div>
        <button type='submit' onClick={shortenLink}>Shorten It!</button>
      </form>
      <ul className="short-links">
        {
          links?.map(link => <Link key={uuidv4()} originalLink={link.original_link} shortLink={link.short_link}/>)
        }
      </ul>
    </div>
  )
}

export default LinkShortener