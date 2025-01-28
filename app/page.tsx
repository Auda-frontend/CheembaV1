import HomeDashboard from "./(dashboard)/home/page";
import DashboardLayout from "./(dashboard)/layout";

export default function Home() {
  return (
    // eslint-disable-next-line react/no-children-prop
    <DashboardLayout children={<HomeDashboard/>}/>
  );
}
