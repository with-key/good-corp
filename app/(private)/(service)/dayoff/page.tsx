import { Suspense } from "react";
import { RarioGroup } from "../../../../design/prodcut-system-a/radio-group/radio-group";
import { DayoffForm } from "./_components/dayoff-form";
import { Stack } from "../../../../design/prodcut-system-a/stack/stack";

export default async function Page() {
  return (
    <div>
      <RarioGroup variant="default">
        <RarioGroup.Item value="apple">
          <RarioGroup.Indicator />
          apple
        </RarioGroup.Item>

        <RarioGroup.Item value="cool">
          <RarioGroup.Indicator />
          apple
        </RarioGroup.Item>

        <RarioGroup.Item value="car">
          <RarioGroup.Indicator />
          car
        </RarioGroup.Item>
      </RarioGroup>

      <RarioGroup variant="secondary">
        <RarioGroup.Item value="apple">
          <Stack dir="row" align="center" gap={50}>
            <div>표준세액공제</div>
            <RarioGroup.Badge />
          </Stack>
        </RarioGroup.Item>

        <RarioGroup.Item value="cool">
          <div>일반세액공제</div>
        </RarioGroup.Item>
      </RarioGroup>

      <Suspense fallback={<>Loading...</>}>{/* <DayoffList /> */}</Suspense>

      <DayoffForm />
    </div>
  );
}
