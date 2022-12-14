import { useState } from 'react'
import Modal from '../Modal'
import '../../index.css'
import {Link} from 'react-router-dom'

function App() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='App'>
      <Link to='/registration_form'>
        <button className='button' onClick={() => setModalActive(true)}>open modal window</button>
      </Link>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;