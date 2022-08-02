import Clock from './Clock';
import Api from './Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
  return (
    <div className="container-fluid">
      <ToastContainer/>
      <Clock/>
      <Api/>
    </div>
  )
}