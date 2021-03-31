import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] =　useState ([
        {
            content: '課題をする'
        },
        {
            content: '洗濯をする'
        },
        {
            content: '電話をする'
        },
        {
            content: '料理をする'
        }
    ])

    const handleSubmit = e => {
        e.preventDefault()

        if (!value) {
            alert('入力してください')
            return

        } else {
            setTodos([
                ...todos,
                {
                    content: value
                }
            ])
        }
        console.log('value: ', value)
    }

    return (
        <>
            <h1>Todo App</h1>
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos} />
        </>
    ) 
}

export default App