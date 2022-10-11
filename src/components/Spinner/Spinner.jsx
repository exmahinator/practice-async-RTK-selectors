import { Audio } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
      />
      ;
    </div>
  );
};
