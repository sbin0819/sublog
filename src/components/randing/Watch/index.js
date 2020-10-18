import React from 'react';

import useCounter from '../../../hooks/useCounter';

function Watch() {
  const { count, onIncrease, onDecrease } = useCounter();

  return (
    <div style={{ marginLeft: '30px' }}>
      <h1>임시 리덕스 테스트용</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Watch;
