import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function Login() {

  const [islogin, setLogin] = useState(true);
  let { register, handleSubmit, errors, watch, reset } = useForm({ mode: 'onChange'});
  let [err, setError] = useState(false);
  let userCreated  = true;

  let history = useHistory(); 

  const sameEmail = (user, values) => {

    if(islogin){
      
      if(user.email === values.email && user.password === values.password){
        let userData = {
          email: user.email,
          password: user.password
        }
        sessionStorage.setItem('user', JSON.stringify(userData))
        history.push('/home');
        reset();
        return;
      } 
      else {
        setError('Please enter correct email and password.');

        setTimeout(() => {
          setError('')
        }, 2000)

        reset();
        return;
      }
    } 
    else {
      setError('User with this email already exist.');

      setTimeout(() => {
        setError('')
      }, 2000)

      reset();
      }
  } 

  const diffEmail = (user, values) => {
    if(islogin){
      setError('User with this email does not exist.');

        setTimeout(() => {
          setError('')
        }, 2000)

        reset();
        return;
    } 
  }

  const newUser = (values) => {
    if(!islogin){

      let user = {
        email: values.email,
        password: values.password,
        likeVDO: [],
        dislikeVDO: [],
        saveVDO: []
      }

      let Users = [];
      Users.push(user);
      localStorage.setItem('users', JSON.stringify(Users));
      
      reset();
      setLogin(true);
      return;
    } else {
      setError('You need to sign in first.');

      setTimeout(() => {
        setError('')
      }, 2000)

      reset();
      return;
    }
  }

  const createUser = (values) => {
    if(!islogin){

    let user = {
      email: values.email,
      password: values.password,
      likeVDO: [],
      dislikeVDO: [],
      saveVDO: []
    }

    let users = JSON.parse(localStorage.getItem('users'));
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    setLogin(true);

    reset();
    return;
    }
  }
 
  const Submit = values => {

    let users = JSON.parse(localStorage.getItem('users'));

    if(users){
      for(let user of users){
        if(user.email === values.email){
          sameEmail(user, values);
          return;
        } else {
          diffEmail(user, values);
        }
      }
    } else {
      newUser(values);
      return;
    }

    if(userCreated){
      createUser(values);
    } 
  }

  const clearError = (errors) => {
    setTimeout(() => {
      errors.email = null
      errors.password = null
      errors.confirmPassword = null
    }, 1000)
  }

  useEffect(() => {
    clearError(errors)
  }, [errors])

  return (
    <section>
    <div className="row content">
      <div className="col login-bg d-lg-block d-none"></div>
      <div className="col login-area py-md-5 py-3 bg-light d-flex flex-column justify-content-center align-items-center text-dark">
          <div className="w-100 p-lg-3 p-2">
            <h1 className="font-weight-bold mb-4"><span className="text-danger">VDO</span>VOO</h1>
            <div className="btn-group float-right" role="group" aria-label="Basic example">

              <button 
              type="button" 
              onClick={() => setLogin(true)}
              className={ islogin ? "btn btn-sm btn-secondary" : "btn btn-sm btn-outline-secondary"}
              >
                Login
              </button>

              <button 
              type="button" 
              onClick={() => setLogin(false)}
              className={ islogin ? "btn btn-sm btn-outline-secondary" : "btn btn-sm btn-secondary"}
              >
                SignUp
              </button>

            </div>
          </div>
        <form className="form w-100 p-lg-3 p-2" onSubmit={handleSubmit(Submit)}>
          <div className="my-3">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email"
              ref={
                register({
                  required: 'Email is required.',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address'
                  }
                })
              }
              placeholder="johndoe@gmail.com" 
              className="form-control" />
              {
                errors.email && <small className="text-danger">{errors.email.message}</small>
              }
              
              
          </div>
          <div className="my-3">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              ref={
                register({
                  required: 'Password is required.',
                  minLength: {
                    value: 5,
                    message: 'Password should be 5 characters long.'
                  }
                })
              }
              placeholder="**************" 
              className="form-control" />
              {
                errors.password && <small className="text-danger">{errors.password.message}</small>
              }
          </div>
          {
            !islogin ? 
            <div className="my-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword" 
                ref={
                  register({
                    required: 'Confirm your password',
                    validate: (value) => value === watch('password') || "Passwords don't match."
                  })
                }
                placeholder="**************" 
                className="form-control" />
                { (!islogin && errors.confirmPassword) && <small className="text-danger">{errors.confirmPassword.message}</small> }
            </div>
            : 
            ''
          }
          
          { err && <small className="text-danger">{err}</small>}
          <button type="submit" className="btn w-100 p-2 mt-2 submit-btn">
            {islogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Login
