import { Contact } from "@/components/Contacto/page";
import { Header } from "@/components/Header";
import { SectionGallery } from "@/components/SectionGallery";
import { SectionProjects } from "@/components/SectionProjects";
import { SectionService } from "@/components/SectionServices";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[1300px] m-auto ">
      <Header></Header>
      <SectionService></SectionService>
      <SectionProjects></SectionProjects>
      <SectionGallery></SectionGallery>
      <Contact></Contact>
    </main>
  );
}
