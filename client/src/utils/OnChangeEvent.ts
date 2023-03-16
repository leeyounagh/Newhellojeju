const OnChangeEvent = <T>(
  value: String,
  name: string,
  data: String,
  setData: T | any
): T => {
  const newData = {
    ...data,
    [name]: value,
  };
  return setData(newData);
};

export default OnChangeEvent;
