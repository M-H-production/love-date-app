import * as Yup from 'yup';
import { requiredField } from '../validations/global.validation';

const partnerSchema = Yup.object().shape({
    name: requiredField,
    birthday: requiredField,
    first_date: requiredField,
});

export default partnerSchema;
