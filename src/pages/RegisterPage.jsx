import FormField from '@components/FormField';
import TextInput from '@components/FormInputs/TextInput';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const { control } = useForm();

    return (
        <div className="flex h-screen items-center justify-center bg-[#f8f7fa]">
            <div className="h-fit w-[450px] bg-white px-8 py-10">
                <img srcSet="/weconnect-logo.png 2x" className="mx-auto mb-6" />
                <form className="flex flex-col gap-4">
                    <FormField name="fullName" label="Full Name" control={control} Component={TextInput} />
                    <FormField name="email" label="Email" control={control} Component={TextInput} />
                    <FormField
                        name="password"
                        label="Password"
                        type="password"
                        control={control}
                        Component={TextInput}
                    />
                    <Button variant="contained">Sign up</Button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Sign in instead</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
