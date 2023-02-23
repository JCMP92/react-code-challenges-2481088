import { useEffect, useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input autoFocus name="focused-input" ref={inputRef}></input>
    </div>
  );
}
