import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Succesfully added your data')
                    reset();
                }
            })
    };

    return (
        <div className='add-service'>
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea  placeholder='Description' {...register("description")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Img link' {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;