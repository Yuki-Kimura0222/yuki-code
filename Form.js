import React, { useState } from 'react'

const Form = ({ todos, setTodos }) => {
    const [value, setValue] = useState('')


    // const handleSubmit = e => {
    //     e.preventDefault()

    //     if (!value) {
    //         alert('入力してください')
    //         return

    //     } else {
    //         setTodos([
    //             ...todos,
    //             {
    //                 content: value
    //             }
    //         ])
    //     }
    //     console.log('value: ', value)
    // }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = 'text'
                onChange = {e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}


export default Form