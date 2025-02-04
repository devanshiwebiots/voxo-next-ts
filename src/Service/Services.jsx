import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAPIData } from '../Utils';

const Services = ({ url, types }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAPIData(`/api/${url}`).then((res) => {
      dispatch({ type: types, payload: res?.data });
    });
  }, [dispatch, types, url]);
};

export default Services;
