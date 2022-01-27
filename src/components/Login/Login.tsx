import Checkbox from '../../ui-components/Checkbox/Checkbox'
import TextField from '../../ui-components/TextField/TextField'

const Login = () => {
  return (
    <div>
      <TextField autoComplete="off" name="name" label="Name" trimOnBlur />
      <Checkbox label="Terms and condition" name="terms" onClick={(e: any) => console.log(e.target.checked)} />
    </div>
  )
}

export default Login
