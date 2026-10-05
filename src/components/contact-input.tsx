export type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  lowercase: boolean;
  required: boolean;
};

export const ContactInput = ({
  name,
  type,
  placeholder,
  lowercase,
  required,
}: InputProps) => {
  return (
    <div className="relative flex items-center border-b-2 border-[#29ABE2] text-[#29ABE2] transition">
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`w-full border-none bg-transparent py-3 pr-3 text-[#282828] placeholder-[#B0B0B0] transition outline-none placeholder:normal-case focus:placeholder-transparent focus:ring-0 ${
          lowercase ? 'lowercase' : 'normal-case'
        }`}
      />
    </div>
  );
};
