const OnChangeEvent = (
  value: String,
  name: string,
  data: String,
  setData: any
) => {
  const newData = {
    ...data,
    [name]: value,
  };
  return setData(newData);
};

export default OnChangeEvent;
