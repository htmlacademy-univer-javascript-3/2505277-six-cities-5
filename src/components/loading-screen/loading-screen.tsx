import { ClipLoader } from 'react-spinners';
function LoadingScreen():JSX.Element {
  return (
    <div className="flex justify-center items-center h-40" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: '100vh'}}>
      <ClipLoader color="#3B82F6" size={70}/>
    </div>
  );
}
export {LoadingScreen};
