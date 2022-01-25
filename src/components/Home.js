import { useNavigate} from 'react-router-dom'

function Home() {
  const navigate =  useNavigate()
  return (
  <>
    <div>Home Page</div>
    <button onClick={() => navigate('order-summary')}>Place Order</button>
     {/* {replace: true} */}
  </>
  
  )
}

export default Home;
