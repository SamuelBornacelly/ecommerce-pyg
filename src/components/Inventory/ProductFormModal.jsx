import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const ProductFormModal = ({ isOpen, onClose, onSave, product }) => {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    image: product?.image || "",
    sizes: product?.sizes?.join(", ") || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const formattedData = {
      ...formData,
      sizes: formData.sizes.split(",").map((size) => size.trim()),
    };
    onSave(formattedData);
    onClose();
  };

  return (
    <Modal >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {product ? "Editar Perfume" : "Agregar Perfume"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Nombre</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre del perfume"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Imagen (URL)</FormLabel>
            <Input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="URL de la imagen"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Tamaños (separados por comas)</FormLabel>
            <Input
              name="sizes"
              value={formData.sizes}
              onChange={handleChange}
              placeholder="Ejemplo: 50ml, 100ml, 250ml"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSave}>
            Guardar
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductFormModal;
