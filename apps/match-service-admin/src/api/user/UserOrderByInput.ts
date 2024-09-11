import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isPhoneVerified?: SortOrder;
  lastName?: SortOrder;
  otp?: SortOrder;
  otpExpiry?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
