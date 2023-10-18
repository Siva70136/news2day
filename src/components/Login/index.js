import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { history } = props
    const home = () => {
        history.replace('/home')
    }

    return (
        <div className="main-container " id="login_page">
            <div className="app-container">
                <div>
                    <form id="addUserForm" className="form" autoComplete='off'>
                        <div>
                            <Link to="/linkedin">
                            <AiOutlineSearch className='icon' />
                            </Link>
                            <p className='desc'>Please confirm or edit your contact information. so that we can notify you when you are approved for our BETA</p>

                        </div>

                        <hr style={{ color: 'black', height: '1px', width: '100%' }} className='line' />
                        <p className='left'>NAME</p>
                        <input type="text" name="" id="name" value={email} className="form-control input" placeholder="Name" onChange={e => setEmail(e.target.value)} required />

                        <p className='left'>EMAIL ADRESS</p>
                        <input type="email" name="" id="PWD" value={password} className="form-control input" placeholder="Email" onChange={e => setPassword(e.target.value)} required />

                        <p className='left'>PHONE NUMBER</p>
                        <input type="text" name="" className="form-control" placeholder="Type a phone number" onChange={e => setPassword(e.target.value)} required />
                        <hr style={{ color: 'black', height: '1px', width: '100%' }} className='line' />

                        <div className="button-container">
                            <button className="button btn" onClick={home}>SIGN UP</button>
                        </div>


                    </form>


                </div>
            </div>

        </div>

    )

}

export default Login;