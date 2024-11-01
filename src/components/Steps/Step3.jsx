import useFormContext from "../../hooks/useFormContext";
import Input from "../Input";

const Step2 = () => {
  const { formData, handleChange } = useFormContext();

  const data = formData[2];

  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="addressOne" className="block mb-2">
          Address One
        </label>
        <Input
          type="text"
          id="addressOne"
          placeholder="AddressOne"
          name="addressOne"
          value={data.addressOne}
          onChange={handleChange}
        />
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="addressTwo" className="block mb-2">
          Address Two
        </label>
        <Input
          className="block w-full py-2 rounded focus:outline-none px-7"
          type="text"
          id="addressTwo"
          placeholder="AddressTwo"
          name="addressTwo"
          value={data.addressTwo}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Step2;
