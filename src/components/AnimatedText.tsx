
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <div className={`inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-[hsl(var(--theme-accent))] animate-typewriter ${className}`}>
      {text}
    </div>
  );
};
