import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: number | null;
  firstName: string | null;
  id: string;
  isPhoneVerified: boolean | null;
  lastName: string | null;
  otp: string | null;
  otpExpiry: Date | null;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
