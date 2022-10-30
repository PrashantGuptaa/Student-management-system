import { useEffect } from 'react';
import { validateToken } from './../utilFunctions';
import { useNavigate } from 'react-router-dom';

const Validator = (Component) => {


    const UpdatedComponent = () => {
        
    const navigate = useNavigate();
    useEffect(() => {
        doValidation();
    }, []);

    const doValidation = async () => {
        const isUserValidated = await validateToken();
        if (!isUserValidated) {
            navigate('/sign-in');
        }
    }

       return <Component />
    }

    return UpdatedComponent;
}

export default Validator;