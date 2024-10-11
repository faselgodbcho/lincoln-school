import useFormContext from "../../hooks/useFormContext";
import Input from "../Input";

const Step1 = () => {
  const { formData, handleChange } = useFormContext();
  const data = formData[0];

  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="firstName" className="block mb-2">
          First Name
        </label>
        <Input
          type="text"
          id="firstName"
          placeholder="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="middleName" className="block mb-2">
          Middle Name
        </label>
        <Input
          type="text"
          id="middleName"
          placeholder="Middle Name"
          name="middleName"
          value={data.middleName}
          onChange={handleChange}
        />
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="lastName" className="block mb-2">
          Last Name
        </label>
        <Input
          type="text"
          id="lastName"
          placeholder="last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Step1;
