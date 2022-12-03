import {
  Button,
  Flex,
  Input as ChakraInput,
  Stack,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  forwardRef,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...rest }: InputProps,
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...rest}
        ref={ref}
      />
      {!!error && <FormErrorMessage>{error.message?.toString()}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
