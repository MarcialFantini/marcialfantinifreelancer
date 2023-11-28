import { Header } from "@/components/Header";
import { SectionGallery } from "@/components/SectionGallery";
import { SectionProjects } from "@/components/SectionProjects";
import { SectionService } from "@/components/SectionServices";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <SectionService></SectionService>
      <SectionProjects></SectionProjects>
      <SectionGallery></SectionGallery>
    </main>
  );
}
