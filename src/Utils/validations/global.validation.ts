import * as Yup from 'yup';

export const requiredField = Yup.string()
  .label('requiredField')
  .required('این فیلد الزامی است.');