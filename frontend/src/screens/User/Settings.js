import React from 'react';
// import { Link } from 'react-router-dom';
import UserFormSettingsAccountInformation from '../../components/User/Form/Settings/AccountInformation';
import UserFormSettingsSecurity from '../../components/User/Form/Settings/Security';

const ScreensUserSettings = () => (
  <div className="container">
    <UserFormSettingsAccountInformation />
    <UserFormSettingsSecurity />
  </div>
);
export default ScreensUserSettings;
