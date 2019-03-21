import React from 'react';

const GifSearch=({ onHandleChange,onHandleSubmit })=>(
    <form onSubmit={ onHandleSubmit }>
        <input name="query" onChange={ onHandleChange }/>
        <button>Submit</button>
    </form>
)

export default GifSearch