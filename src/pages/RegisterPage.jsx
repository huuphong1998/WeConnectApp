import FormField from '@components/FormField';
import TextInput from '@components/FormInputs/TextInput';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const { control } = useForm();

    return (
        <div>
            <p className="text-dark-100 mb-5 text-center text-2xl font-bold">Register</p>
            <form className="flex flex-col gap-4">
                <FormField name="fullName" label="Full Name" control={control} Component={TextInput} />
                <FormField name="email" label="Email" control={control} Component={TextInput} />
                <FormField name="password" label="Password" type="password" control={control} Component={TextInput} />
                <Button variant="contained">Sign up</Button>
            </form>
            <p className="mt-4">
                Already have an account? <Link to="/login">Sign in instead</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
