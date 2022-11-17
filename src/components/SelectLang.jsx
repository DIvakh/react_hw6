import React, { memo } from 'react';

const languages = [
  'All',
  'Javascript',
  'HTML',
  'Golang',
  'PHP',
  'Python',
  'Java'
];

const SelectedLang = memo(({ selectLang, selectedLang, loading }) => {
  return (
    <ul className='lang-container'>
      {languages.map((lang) => (
        <li
          className={loading ? 'disable' : undefined}
          onClick={() => selectedLang !== lang && !loading && selectLang(lang)}
          style={selectedLang === lang ? { color: 'cyan' } : null}
          key={lang}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
});

export default SelectedLang;
