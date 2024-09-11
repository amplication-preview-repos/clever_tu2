import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  email?: IntNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isPhoneVerified?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  otp?: StringNullableFilter;
  otpExpiry?: DateTimeNullableFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
};
