import React from 'react';
import moment from 'moment';

interface FormattedDateProps {
  date: string;
  format: string;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ date, format }) => {
  const formattedDate = moment(date).format(format);

  return <>{formattedDate}</>;
};

export default FormattedDate;
