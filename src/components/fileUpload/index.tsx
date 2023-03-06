import { ReactNode, useRef } from "react";
import { Button, FormControl, FormErrorMessage, FormLabel, Icon, InputGroup } from "@chakra-ui/react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { FiImage } from "react-icons/fi";

type FileUploadProps = {
  register: UseFormRegisterReturn;
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
};

const FileUpload = (props: FileUploadProps) => {
  const { register, accept, multiple, children } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register as { ref: (instance: HTMLInputElement | null) => void };

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={"file"}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
      />
      <>{children}</>
    </InputGroup>
  );
};

type FormValues = {
  file_: FileList;
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  // todo: upload image and validate again on backend
  const onUpload = handleSubmit((data) => console.log("On Submit: ", data));

  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return "Files is required";
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return "Max file size 10mb";
      }
    }
    return true;
  };

  return (
    <>
      <FormControl isInvalid={!!errors.file_} isRequired>
        <FileUpload accept={"image/*"} multiple register={register("file_", { validate: validateFiles })}>
          <Button leftIcon={<Icon as={FiImage} />}>Add a cover image</Button>
        </FileUpload>

        <FormErrorMessage>{errors.file_ && errors?.file_.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default App;