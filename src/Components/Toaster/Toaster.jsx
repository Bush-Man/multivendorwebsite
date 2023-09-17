/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Toaster.scss";
const Toaster = ({ text, type, duration}) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
       const timer =  setTimeout(() => {
           setVisible(false);
          // onClose && onClose()
       }, duration) 
        return () => {
            clearTimeout(timer);
        }
    }, [duration]);

    const toastClassName = `toast ${type === 'success' ? 'success ' : 'error'}`;
    return (
        
        visible && (
            <div className={toastClassName}>
                <div className="toast_content">{text}</div>

            </div>
        )
    )
}

export default Toaster