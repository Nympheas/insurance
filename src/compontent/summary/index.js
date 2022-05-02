import './index.css';
import { Link , useLocation} from 'react-router-dom'

function Summary() {
  let location = useLocation()
  return (
    <div className="summary">
      <div className="wapper">
          <h1>Summary</h1>
          <p className="name">${'\u007B'}name{'\u007D'}</p>
          <p>name: {location.state.name}</p>
          <p>Age: {location.state.age}</p>
          <p>Where do you live: {location.state.country}</p>
          <p>Package: {location.state.package}</p>
          <p>Premium: {location.state.premium}{location.state.currency}</p>
          <div className="btn-group">
            <button><Link to="/tellUs" style={{ textDecoration: 'none', color: 'black' }} >Back</Link></button>
            <button><Link to="/" style={{ textDecoration: 'none', color: '#fff' }} >Buy</Link></button>
          </div>
      </div>
    </div>
  );
}

export default Summary;
