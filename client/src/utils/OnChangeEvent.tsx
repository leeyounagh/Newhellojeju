const OnChangeEvent = (
  value: String,
  name: string,
  data: String,
  setData: any
) => {
  console.log(value, name);
  const newData = {
    ...data,
    [name]: value,
  };
  return setData(newData);
};

export default OnChangeEvent;
