import * as Yup from 'yup';
import { requiredField } from '../validations/global.validation';

const profileSchema = Yup.object().shape({
    name: requiredField,
    birthday_notify_active: requiredField,
    special_days_notify_active: requiredField,
});

export default profileSchema;
