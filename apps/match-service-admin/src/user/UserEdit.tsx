import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="isPhoneVerified" source="isPhoneVerified" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="otp" source="otp" />
        <DateTimeInput label="otpExpiry" source="otpExpiry" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
