import './index.css';
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="welcome">
      <div className="wapper">
          <h1>Hello There!</h1>
          <p>Let's buy some insurance.It is going to only a few steps.</p>
          <button><Link to="/tellUs" style={{ textDecoration: 'none', color: '#fff' }} >Start</Link></button>
      </div>
    </div>
  );
}

export default Welcome;
