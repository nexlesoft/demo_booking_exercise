// Centralized propType definitions
import { shape, number, string, oneOfType } from "prop-types";

export const loginUserType = shape({
  userName: oneOfType([number, string]),
  password: oneOfType([number, string])
});
