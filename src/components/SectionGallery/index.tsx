import { Gallery } from "../Gallery";
import { TextGallery } from "../TextGallery";

export function SectionGallery() {
  return (
    <section id="desarrollo" className="w-[95%] mx-auto mt-[4rem]">
      <TextGallery></TextGallery>
      <Gallery></Gallery>
    </section>
  );
}
