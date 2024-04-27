import { useState } from 'react'
import './Formulario.css'

const Formulario = () => {
    const [values, setValues] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        address: "",

    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSummit = (e) => {
        e.preventDefault()
        console.log(values);

    }
    return (
        <>
            <div className='div' >
                <h2>Formulario de contacto</h2>
                <form action="" onSubmit={handleSummit} className='form'  >
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        placeholder='Ingrese su nombre'
                        onChange={handleInputChange}
                        className=' input' />
                    <input
                        type='text'
                        name='lastname'
                        value={values.lastname}
                        placeholder='Ingrese su apellido'
                        onChange={handleInputChange}
                        className=' input' />

                    <input
                        type='email'
                        name='email'
                        value={values.email}
                        placeholder='Ingrese su email'
                        onChange={handleInputChange}
                        className=' input' />

                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        placeholder='Ingrese su password'
                        onChange={handleInputChange}
                        className=' input' />

                    <input
                        type='text'
                        name='phone'
                        value={values.phone}
                        placeholder='Ingrese su telefono'
                        onChange={handleInputChange}
                        className=' input' />

                    <input
                        type='text'
                        name='address'
                        value={values.address}
                        placeholder='Ingrese su direccion'
                        onChange={handleInputChange}
                        className=' input' />
                        
                    <button type='submit' className='btnSubmit'>
                        SEND
                    </button>
                </form>

            </div>

        </>
    )
}

export default Formulario