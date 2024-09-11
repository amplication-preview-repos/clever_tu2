import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: number | null;
  firstName?: string | null;
  isPhoneVerified?: boolean | null;
  lastName?: string | null;
  otp?: string | null;
  otpExpiry?: Date | null;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  username: string;
};
