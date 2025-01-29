import { BsExclamationCircleFill } from "react-icons/bs";

interface FormSuccessProps {
  message?: string;
}

const FormError = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="flex space-x-4 items-center p-2 rounded-lg text-red-500 bg-red-300/50">
      FormError
      <BsExclamationCircleFill className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
