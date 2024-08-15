import { Suspense } from "react";
import { DayoffList } from "./_components/dayoff-list";
import { DayoffForm } from "./_components/dayoff-form";

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <DayoffList />
      </Suspense>

      <DayoffForm />
    </div>
  );
}
