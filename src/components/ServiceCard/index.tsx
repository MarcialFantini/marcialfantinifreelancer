"use client";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
interface item {
  title: string;
  srcImage: string;
  subTitle: string;
  type: string;
  texts: {
    title: string;
    text: string;
  }[];
}

export const CardComponent = ({
  index,
  item,
}: {
  index: number;
  item: item;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5  shadow-lg shadow-warning/40  "
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-[1.8rem] text-white/70 uppercase font-bold">Web</p>
          <h4 className="text-white font-bold text-[3rem]">{item.title}</h4>
        </CardHeader>

        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={item.srcImage}
        />
        <div className=" absolute w-full h-full top-0 left-0 bg-black/70"></div>
        <CardFooter className="absolute bg-black/5 backdrop:blur-sm bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between min-h-[30%]">
          <div>
            <p className="text-white  text-[1.2rem]  ">{item.subTitle}</p>
          </div>
          <Button
            className=""
            color="primary"
            radius="full"
            variant="shadow"
            onClick={onOpen}
          >
            Información
          </Button>
        </CardFooter>
      </Card>
      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold text-[2rem]">
                {item.title}
              </ModalHeader>
              <ModalBody>
                {item.texts.map((item, key) => {
                  return (
                    <div key={key}>
                      <h3 className="text-[2rem] text-warning-500">
                        {item.title}
                      </h3>
                      <p className=" text-[1.4rem]">{item.text}</p>
                    </div>
                  );
                })}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Atrás
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
