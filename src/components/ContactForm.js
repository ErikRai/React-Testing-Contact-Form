import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dropdown, DropdownButton} from 'react-bootstrap'

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = (data) => {
    setData(data);
    reset();
  };

  console.log(data);
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            data-testid="firstName"
            placeholder="Erik"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p data-testid="firstName-error">Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            data-testid="lastName"
            placeholder="Faison"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="erikf@email.com">
            Email*
          </label>
          <input name="email" 
          data-testid="email"
          ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: false })} />
        </div>
        {data && (
        <div data-testid='print-out' >
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
        )}
        <Dropdown>
          <Dropdown.Toggle data-testid="email" style={{color:'mediumaquamarine'}} id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item value="item1" data-testid="act1" style={{background:'#333',color:'mediumaquamarine',border:'1px solid black',filter:'drop-shadow(3px 3px 3px black)'}}>Item1</Dropdown.Item><br />
            <Dropdown.Item value="item2" data-testid="act2" style={{background:'#333',color:'mediumaquamarine',border:'1px solid black',filter:'drop-shadow(3px 3px 3px black)'}}>Item2</Dropdown.Item><br />
            <Dropdown.Item selected value="item3" data-testid="act3" style={{background:'#333',color:'mediumaquamarine',border:'1px solid black',filter:'drop-shadow(3px 3px 3px black)'}}>Item3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input type="submit" data-testid="submit"/>
      </form>
    </div>
  );
};

export default ContactForm;
