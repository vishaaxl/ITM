import { Field, useField } from "formik";
import styled from "styled-components";

interface Props {
  name: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  component?: string;
  rows?: number;
  value?: string;
  children?: React.ReactNode;
  min?: any;
  max?: any;
  hidelabel?: boolean;
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  type,
  disabled,
  component,
  rows,
  children,
  min,
  max,
  hidelabel,
}) => {
  const [field, meta] = useField(name);
  return (
    <InputBlock className="input-block custom-input">
      {!hidelabel && <label htmlFor={name}>{placeholder}</label>}
      <Field
        placeholder={placeholder}
        min={min || null}
        max={max || null}
        id={name}
        type={type || "text"}
        disabled={disabled}
        {...field}
        component={component}
        rows={rows}
        onChange={(e: any) => field.onChange(e)}
      >
        {children}
      </Field>
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </InputBlock>
  );
};

const Error = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.accent.tertiary};
  font-size: 0.75rem;
`;

export const InputBlock = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    margin-bottom: 0.75rem;
    opacity: 0.8;
    font-size: 0.95rem;
  }
  input,
  textArea,
  select {
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 500;

    color: ${({ theme }) => theme.secondary};
    width: 100%;
    padding: 1rem 0.5rem;
    border: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    outline: none;

    background: transparent;

    &::placeholder {
      color: rgba(255, 255, 255, 0.75);
    }
  }

  textArea,
  select {
    text-transform: capitalize;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`;

export default Input;
