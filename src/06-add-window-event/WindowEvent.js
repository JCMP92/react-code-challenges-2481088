import { useEffect } from 'react';

export default function WindowEvent() {
  useEffect(() => {
    function myAlert(e) {
      window.alert('You just doubleClicked');
    }

    window.addEventListener('dblclick', myAlert);

    return () => window.removeEventListener('dblclick', myAlert);
  }, []);

  return <h2>Window event active</h2>;
}
