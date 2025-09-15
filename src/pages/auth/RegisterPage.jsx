import FormField from '@components/FormField';
import TextInput from '@components/FormInputs/TextInput';
import { Alert, Button } from '@mui/material';
import { useRegisterMutation } from '@services/rootApi';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const { control, handleSubmit } = useForm();

    const [register, { data, isLoading, error, isError }] = useRegisterMutation();

    function onSubmit(formData) {
        console.log({ formData });
        register(formData);
    }

    console.log({ data, isLoading, error });

    return (
        <div>
            <p className="text-dark-100 mb-5 text-center text-2xl font-bold">Register</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <FormField name="fullName" label="Full Name" control={control} Component={TextInput} />
                <FormField name="email" label="Email" control={control} Component={TextInput} />
                <FormField name="password" label="Password" type="password" control={control} Component={TextInput} />
                <Button variant="contained" type="submit">
                    Sign up
                </Button>
                {isError && <Alert severity="error">{error?.data?.message}</Alert>}
            </form>
            <p className="mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-dark-100">
                    Sign in instead
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
