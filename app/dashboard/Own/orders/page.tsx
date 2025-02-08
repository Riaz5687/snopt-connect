import { myReportsData } from "@/app/lib/my-reports";
import { OrdersData } from "@/app/lib/Order";
import Card from "@/app/UI/common/card";

export default function Orders() {
  return (
    <>
      {" "}
      {OrdersData.map((data, i) => (
        <Card
          key={i}
          title={data.title}
          clubNames={data.clubNames}
          image={data.image}
          shieldIcons={data.shieldIcons}
          details={data.details}
          reportStatus={data.reportStatus}
        />
      ))}
    </>
  );
}
