import React from 'react';

interface WordsProps {
  text: string;
  delay?: number;
}

/** يُظهر كل كلمة بصعود ناعم من خلف قناع، بالتتابع. */
export const Words: React.FC<WordsProps> = ({ text, delay = 120 }) => {
  const words = text.split(' ');
  return (
    <span aria-label={text}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="word-mask" aria-hidden="true">
            <span className="word" style={{ animationDelay: `${delay + i * 80}ms` }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </span>
  );
};
