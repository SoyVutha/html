import ClipLoader from 'react-spinners/ClipLoader'; // Use ClipLoader as an alternative

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <ClipLoader size={50} color={"#00BFFF"} />
    </div>
  );
};

export default Loading;
