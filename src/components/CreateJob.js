import React, { useState } from 'react';


const CreateJob = ({submit}) => {
    const [form,setForm] = useState({
        title:'',
        company:'',
        city:'',
        description:''
    });

    const handleInput = (event) =>{
        setForm({...form, [event.target.name]:event.target.value });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submit({...form, id: new Date().getTime().toString()});
        console.log('submitt');
    }
    return (
        <>
            <div className="title is-5">Create a vacancy</div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Job Title</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Job title" name="title" value={form.title} onChange={handleInput} required />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Company</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Company" name="company" value={form.company} onChange={handleInput} required />
                    </div>
                </div>

                <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="City" name="city" value={form.city} onChange={handleInput} required />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Description" name="description" value={form.description} onChange={handleInput} required></textarea>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateJob