import { FormStatus, useFormStatus } from "react-dom";

type Props = {
  children: (status: FormStatus) => React.ReactNode;
};

export const IsPendingForm = ({ children }: Props) => {
  const status = useFormStatus();
  return children(status);
};
