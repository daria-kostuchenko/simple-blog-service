import React from 'react';
import PageHeader from '../../containers/PageHeader';
import RegistrationFormContainer from '../../containers/RegistrationFormContainer';

const RegistrationPage = () => (
  <>
    <PageHeader />
    <RegistrationFormContainer isRegistration={true} />
  </>
)

export default RegistrationPage;
