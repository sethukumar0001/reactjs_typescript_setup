import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='text-center mt-5'>
        <img src={`/404.jpg`}  />
      <p>Click to route to `<b>{window.location.pathname}</b>` which isn't a registered route:</p>
      <Link to="/input-module/dashboard">Let's go</Link>
    </div>
  );
};

export default NotFoundPage;
