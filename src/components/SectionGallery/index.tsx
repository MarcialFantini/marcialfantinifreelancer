import { Gallery } from "../Gallery";
import { TextGallery } from "../TextGallery";

export function SectionGallery() {
  return (
    <section id="desarrollo" className="w-[95%] mx-auto my-[4rem]">
      <TextGallery></TextGallery>
      <Gallery></Gallery>
    </section>
  );
}
