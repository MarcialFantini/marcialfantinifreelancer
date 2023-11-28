export function TextGallery() {
  return (
    <div className=" grid sm:grid-cols-2 ">
      <div>
        <p className=" font-bold text-[2rem] text-orange-500">Kartik Bansal</p>
        <h2 className="text-[4rem] flex flex-col">
          Creative UI/ <span>UX Designer</span>
        </h2>
      </div>
      <div>
        <p className=" text-[1.8rem] font-bold mb-[2rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iusto
          recusandae eaque, nihil aspernatur explicabo earum magnam asperiores
          soluta iure. Molestiae quod ex iure consequuntur? Dolorem et
          aspernatur sunt vel?
        </p>{" "}
        <p className=" text-[1.4rem] text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          dolore eligendi rem asperiores corporis, nobis minus, et vitae laborum
          ullam debitis officia animi? Vero repudiandae eius beatae, aperiam
          officiis neque.
        </p>
      </div>
    </div>
  );
}
