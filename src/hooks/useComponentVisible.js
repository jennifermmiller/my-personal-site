import { useCallback, useEffect, useRef } from 'react';

const useComponentVisible = ({ enabled = true, onClickHideComponent, ref }) => {
  const containerRef = useRef();
  const targetRef = ref || containerRef;

  const handleClickOutside = useCallback(
    (event) => {
      if (
        enabled &&
        targetRef &&
        targetRef.current &&
        !targetRef.current.contains(event.target)
      ) {
        onClickHideComponent instanceof Function && onClickHideComponent();
      }
    },
    [enabled, targetRef, onClickHideComponent]
  );

  useEffect(() => {
    const handleHideDropdown = (event) => {
      if (event.key === 'Escape') {
        onClickHideComponent instanceof Function && onClickHideComponent();
      }
    };

    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [handleClickOutside, onClickHideComponent])

  return { ref: targetRef }
};

export default useComponentVisible;
