const OnChangeEvent = <T>(
  value: string,
  name: string,
  data: T,
  setData: T | any
): T => {
  const newData = {
    ...data,
    [name]: value,
  };
  return setData(newData);
};

export default OnChangeEvent;
