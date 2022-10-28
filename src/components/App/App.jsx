import FormItem from '../FormItem/index'
import '../../index.css'

function App() {
  return (
    <div className='App'>
      <FormItem
        title={'Registration'}
        button={{ submit: 'Sign in', redirect: 'Login' }}
        infoText={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
        formType={'registration'}
      />

      <FormItem
        title={'Login'}
        button={{ submit: 'Login', redirect: 'Sign in' }}
        infoText={'Forget password?'}
        formType={'registration'}
      />

      <FormItem
        title={'New password'}
        button={{ submit: 'New password' }}
        infoText={'The temporary password is valid for 24 hours.'}
        formType={'registration'}
      />
    </div>
  );
}

export default App;