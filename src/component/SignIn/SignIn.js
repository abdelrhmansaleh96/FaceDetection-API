import React from "react";
// import './SignIn.css'

const SignIn=({onFormClick})=>{
    return(
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
        <main className="flex flex-column pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                <div className="ma2">
                  <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={()=>onFormClick('home')}></input>
                </div>
              <div className="lh-copy mt3 ">
                <p  onClick={()=>onFormClick('register')} className="f6 link dim black db pointer grow">Register</p>

              </div>
      </div>
    </fieldset>

  </form>
</main>

        </article>



    )
}

export default SignIn;
