import { useSelector, useDispatch } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/sample';
import { useCallback } from 'react';

export default function useCounter() {
  const count = useSelector((state) => state.sample);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increaseAsync()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decreaseAsync()), [dispatch]);

  return {
    count,
    onIncrease,
    onDecrease,
  };
}
