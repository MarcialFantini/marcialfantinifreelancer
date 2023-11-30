export function Contact() {
  return (
    <section id="contact" className="w-[95%] mx-auto py-10">
      <h2 className=" sm:text-[2rem] font-bold text-orange-500">Contactame!</h2>

      <p className=" flex flex-col sm:flex-row sm:gap-5 sm:text-[2rem]">
        <span className=" text-warning-500">Teléfono:</span>{" "}
        <a href="tel:+543533685147">+54 3533 685147</a>
      </p>
      <p className="flex flex-col sm:flex-row  sm:gap-5 sm:text-[2rem]">
        <span className=" text-warning-500">Correo Electrónico:</span>
        <a href="mailto:marcialfantini@gmail.com">marcialfantini@gmail.com</a>
      </p>
    </section>
  );
}
