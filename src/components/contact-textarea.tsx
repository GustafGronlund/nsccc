export type ContactTextareaProps = {
  name: string;
  placeholder: string;
  required: boolean;
  rows?: number;
};

export const ContactTextarea = ({
  name,
  placeholder,
  required,
  rows = 5,
}: ContactTextareaProps) => {
  return (
    <div className="border-b-2 border-[#29ABE2]">
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="w-full resize-none border-none bg-transparent py-3 pr-3 text-[#282828] placeholder-[#B0B0B0] transition outline-none focus:placeholder-transparent focus:ring-0"
      />
    </div>
  );
};
