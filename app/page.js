import Banner from "./components/Banner/Banner";
import CompleteCare from "./components/completeCate/CompleteCare";
import MedicalServices from "./components/MedicalServices/MedicalServices";

export default function Home() {
  return (
    <div className="space-y-24">
      <Banner />
      <CompleteCare />
      <MedicalServices />
    </div>
  );
}
