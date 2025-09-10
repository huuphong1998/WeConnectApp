import { TextField } from '@mui/material';

const TextInput = ({ onChange, value, name, type = 'text' }) => {
    return <TextField name={name} value={value} type={type} onChange={onChange} />;
};

export default TextInput;
