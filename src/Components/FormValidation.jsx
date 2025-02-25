import { useEffect, useState } from "react";

let FormValidation = ()=>{
    const [form, setForm]= useState({
        name: '',
        email: '',
        password:''
    })

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    const validate=()=>{
        const errs = {};
        if(!form.name) errs.name ='Name required';
        if(!form.email) errs.email = 'email required';
        if(!form.password) errs.password = 'Password required';
        setErrors(errs);
        return errs;
    };
    useEffect(() => {
       validate();
    }, [form]);


    const handleSubmit=(e)=>{
        e.preventDefault();
        const errs = validate();

        if(Object.keys(errs).length === 0){
            setSubmittedData(form);
        }else{
            setSubmittedData(null);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
            {
                submittedData && (
                    <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h2>submitted Data</h2>
                    <p><strong>Name: </strong>{submittedData.name}</p>
                    <p><strong>Email: </strong>{submittedData.email}</p>
                    <p><strong>Password: </strong>{submittedData.password}</p>
                    </div>
                )
            }
        </>
    )

}
export default FormValidation;