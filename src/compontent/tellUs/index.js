import './index.css';
import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'

function TellUs() {
  const [age, setAge] = useState(0)
  const [rate, setRate] = useState(1)
  const [sum, setSum] = useState(1)
  const [currency, setCurrency] = useState('HKD')
  const [name, setName] = useState('')
  const [p, setP] = useState('standard')
  const [country, setCountry] = useState('Hong Kong')
  let premium = null
  const navigate = useNavigate()
  const getInputVal = e => {
    setAge(e.target.value)
  }
  const getName = e => {
    setName(e.target.value)
  }
  const getRate = e => {
    setRate(e.target.value)
    if (e.target.value === "1") {
      setCurrency('HKD')
      setCountry('Hong Kong')
    } else if ( e.target.value === "2") {
      setCurrency('USD')
      setCountry('USA')
    } else if ( e.target.value === "3") {
      setCurrency('AUD')
      setCountry('Australia')
    }
  }
  const getSum = e => {
    setSum(e.target.value)
    if (e.target.value === 1) {
      setP('Standard')
    } else if (e.target.value === 0.5) {
      setP('Safe')
    } else if (e.target.value === 0.75) {
      setP('Super safe')
    }
  }
  premium = 10 * age * rate * sum
  // setPremium(10 * age * rate * sum)
  const next = () => {
    if (age > 100) {
      navigate('/error')
    } else {
      navigate('/summary', {
        state: {
          name: name,
          age: age,
          country: country,
          package: p,
          premium: premium,
          currency: currency
        }
      })
    }
  }
  return (
    <div className="tellUs">
      <h1>Tell us about youself</h1>
      <form>
        <div className="name">
          <label>Name</label>
          <input type="text" placeholder="Add text" onChange={getName}/>
        </div>
        <div className="age">
          <label>age</label>
          <input type="text" placeholder="" value={age} onChange={getInputVal}/>
        </div>
        <div className="country">
          <label>Where do you live</label>
          <select value={rate} onChange={getRate}>
            <option value="1">Hong Kong</option>
            <option value="2">USA</option>
            <option value="3">Australia</option>
          </select>
        </div>
      </form>
      <div className="cale">
        <div className="package">
          <div>
            <input type="radio" id="standard" name="package" value="1" checked onChange={getSum}/>
            <label>Standard</label>
          </div>
          <div>
            <input type="radio" id="safe" name="package" value="0.5" onChange={getSum}/>
            <label>Safe (+{10 * age * 0.5 * rate}{currency}, 50%)</label>
          </div>
          <div>
            <input type="radio" id="super safe" name="package" value="0.75" onChange={getSum}/>
            <label>Super safe(+{10 * age * 0.75 * rate}{currency}, 75%)</label>
          </div>
        </div>
        <p>Your premium is : {premium}{currency}</p>
        <div className="btn-group">
          <button><Link to="/" style={{ textDecoration: 'none', color: 'black' }} >Back</Link></button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default TellUs
