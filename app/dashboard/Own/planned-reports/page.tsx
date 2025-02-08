import { myReportsData } from "@/app/lib/my-reports";
import Card from "@/app/UI/common/card";

export default function PlannedReports() {
  return (
    <>
      {myReportsData.map((data, i) => (
        <Card
          key={i}
          title={data.title}
          clubNames={data.clubNames}
          image={data.image}
          shieldIcons={data.shieldIcons}
          details={data.details}
        />
      ))}
    </>
  );
}
