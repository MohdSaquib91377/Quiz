import React, { useState,useRef } from 'react'
import { FormControl, Input, InputLabel, FormHelperText,Button} from '@material-ui/core';
import './User.css'
import Modal from 'react-modal';


function User({score}) {

    const userRef = useRef('') //creating a refernce for TextField Component
    const emailRef =useRef('')
    const [modalIsOpen,setIsOpen] = React.useState(false);

    const Submit=()=>{
        
        setIsOpen(true);


    }
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    function openModal() {
        setIsOpen(true);
      }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    
    }
      
  function closeModal(){
    setIsOpen(false);
  }
 
    return (    
     
        <div className="User">
           
            <FormControl>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" 
            inputRef={userRef}   //connecting inputRef property of TextField to the valueRef
            />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" 
                            inputRef={emailRef}   //connecting inputRef property of TextField to the valueRef

                />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

            </FormControl>
            <div className="submit__button">
            <Button variant="contained" color="primary" className="submit__button"  onClick={Submit}>
                Submit  
            </Button>
               
           
              

            </div>

            <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
         
          <div className="modal">
            <h1>Hello,<span style={{color:"lightblue"}}>{userRef.current.value}</span>  your score is,  {score}</h1>
          </div>
        </Modal>
        </div>
        
    )
}

export default User
