import React from 'react';
import './ModalStyle.css'
import { faker } from '@faker-js/faker';

const Modal = ({person}) =>
{
    
    return(
        <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <div className='head'>
                    <label>SGCIS Test Page 2</label>
                </div>
                <div className='body'>
                    <div>{person.Name}</div>
                    <div>{person.Age}</div>
                    <div>{person.PersonTypeID}</div>

                    <div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Modal