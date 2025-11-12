const PropsChildOne = ({info}) => {
  console.log(info);
  return (
    <>
      <h1>data equal to {info.age}</h1>
    </>
  );
};

export default PropsChildOne;
