"use client";

import { useFormState } from "react-dom";
import { createDayoff } from "../_libs/actions";
import { IsPendingForm } from "@/shared/ui/is-pending-form";
import { Button } from "@/shared/ui/button";

export function DayoffForm() {
  const [state, action] = useFormState(createDayoff, null);

  return (
    <form action={action}>
      <input type="date" name="startDate" />
      <input type="date" name="endDate" />

      <IsPendingForm>
        {({ pending }) => {
          return <Button disabled={pending}>전송</Button>;
        }}
      </IsPendingForm>
    </form>
  );
}
