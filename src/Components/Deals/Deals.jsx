import './Deals.scss';
const Deals = ({children}) => {
 
  return (
    <div className='deals'>
      <div className="container">
    {children}
      </div>
    </div>
  )
}

export default Deals