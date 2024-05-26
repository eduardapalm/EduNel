import ITagProps from "@/interfaces/props/ITagProps";

const Tag = (props: ITagProps) => {
  const { content } = props;
  return (
    <p className="text-xs bg-color-1 w-fit py-1 px-2 rounded text-n-1 font-bold">
      {content}
    </p>
  );
};

export default Tag;
