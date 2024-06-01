import React, { useState } from "react";
import {
  Button,
  DateValue,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import styles from "./styles.module.css";
import InputPrimary from "../inputs/input";
import InputTextare from "../inputs/input_textarea";
import InputDate from "../inputs/input_date";
import { getLocalTimeZone, today } from "@internationalized/date";
import SelectAsync from "../select/layout";

type Modal = {
  isOpen: boolean;
  onOpenChange: any;
};

const ModalCreateProduct: React.FC<Modal> = ({ isOpen, onOpenChange }) => {
  const imgPrimary =
    "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg";
  const fallback = "https://via.placeholder.com/418x278";

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: today(getLocalTimeZone()).toString(),
    status: "",
  });

  const handleInputChange = (name: string, value: string | DateValue) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("🚀 ~ formData:", formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={styles["modal"]}
      placement="top-center"
      backdrop="blur"
      size="4xl"
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader>Create Product</ModalHeader>
            <ModalBody className={styles["modalBody"]}>
              <section className={styles["sectionLeft"]}>
                <Image
                  //   width={400} // whithout width the size is 100%
                  height={200}
                  src={imgPrimary}
                  fallbackSrc={fallback} // Optional
                  alt="NextUI Image with fallback"
                />
              </section>
              <section className={styles["sectionRight"]}>
                <InputPrimary
                  type={"name"}
                  label={"Name"}
                  placeholder={"Enter the name of product"}
                  required={true}
                  onValueChange={(value) => handleInputChange("name", value)}
                />
                <InputTextare
                  required={true}
                  onValueChange={(value) =>
                    handleInputChange("description", value)
                  }
                />
                <InputDate
                  onValueChange={(value) => handleInputChange("date", value)}
                />
                <p>Supplies:</p>
                <div>
                  <SelectAsync />
                  <div className={styles["supplies-info"]}>
                    <InputPrimary
                      type={"number"}
                      label={"Quantity"}
                      placeholder={"0"}
                      onValueChange={(value) => console.log(value)}
                    />
                    <InputPrimary
                      type={"number"}
                      label={"Cost"}
                      placeholder={"0"}
                      onValueChange={(value) => console.log(value)}
                      disable={true}
                      startContent={
                        <span className="text-color-black text-small">$</span>
                      }
                    />
                  </div>
                </div>
              </section>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose}>
                Close
              </Button>
              <Button type="submit" color="primary">
                Create
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateProduct;
