import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConditionalNavigation = ({ condition }) => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const navigateAsync = async () => {
      setIsNavigating(true);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate an async operation
      if (isMounted) {
        navigate('/destination');
      }
      setIsNavigating(false);
    };

    if (condition && !isNavigating) {
      navigateAsync();
    }

    return () => { isMounted = false; };
  }, [condition, navigate, isNavigating]);

  return (
    <div>
      {condition && <p>Navigating...</p>}
    </div>
  );
};

export default ConditionalNavigation;