import React, { useState } from 'react';

export const Post = () => {

    const [ doPost, setDoPost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(doPost);
    }

    return(

        <div className="container">
            <h2 className="title">Contact Us</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor='name' className="label">Post</label>
                    <input type="text" id="name" name='name' value={doPost} onChange={e => setDoPost(e.target.value)} className="input" />
                </div>

                <button type='submit' className="submit-button">Submit</button>
            </form>
        </div>

    )
}