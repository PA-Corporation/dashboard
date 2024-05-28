import React from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import styles from "./styles.module.css";

type Modal = {
  isOpen: boolean;
  onOpenChange: any;
};

const ModalCreate: React.FC<Modal> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      className={styles["modal"]}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Create New Workspace</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Name Worksapce"
                placeholder="Enter the name"
                variant="bordered"
              />
              <Input
                autoFocus
                label="Description"
                placeholder="Enter your description"
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Create
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalCreate;
