import { useState, useEffect } from 'react';
import axios from 'axios';
import * as api from '../lib/api';

export default () => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    const fn = async () => {
      try {
        const response = await axios.get(api.baseNewsAPI);
        setValue(() => response.data.articles);
      } catch (e) {
        throw e;
      }
    };
    fn();
  }, []);
  return value;
};
