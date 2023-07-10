// validation
export interface ValidationAble {
  value: number | string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validationInput: ValidationAble): boolean | string {
  let isValid = true;
  if (validationInput.required) {
    isValid = isValid && validationInput.value.toString().trim().length !== 0;
  }
  if (validationInput.minLength) {
    isValid =
      isValid &&
      validationInput.value.toString().trim().length >=
        validationInput.minLength;
  }

  if (validationInput.maxLength && typeof validationInput.value === "string") {
    isValid =
      isValid &&
      validationInput.value.trim().length <= validationInput.maxLength;
  }

  if (validationInput.minLength && typeof validationInput.value === "string") {
    isValid =
      isValid &&
      validationInput.value.trim().length <= validationInput.minLength;
  }

  if (validationInput.min && typeof validationInput.value === "number") {
    isValid = isValid && validationInput.value <= validationInput.min;
  }

  if (validationInput.max && typeof validationInput.value === "number") {
    isValid = isValid && validationInput.value > validationInput.max;
  }

  return isValid;
}
