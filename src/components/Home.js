import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
       document.title="Home Page"
         
    }, [])
    return (
        <div >
            <h1>LearnCode With Farid</h1>

            <p>This is coding for learning java and NodeJs</p>
        </div>
    )
}

export default Home
