import { Link } from 'react-router-dom'
function Header() {
  return (
        <div className='text-end'>
            <span className='text-xl mr-6'>Project Farm X</span>
            <span className='mr-6 text-xl'><Link to='/'>Home</Link></span>
            <span className='mr-6 text-xl'><Link to='/login'>Login</Link></span>
            <span className='mr-6 text-xl'>Dashboard</span>
        </div>
  )
}

export default Header