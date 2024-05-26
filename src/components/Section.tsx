const Section = (props: ISectionProps) => {
  const { id, className, children } = props;
  return (
    <div
      id={id}
      className={`${className} px-10 my-20 flex flex-col items-center`}
    >
      {children}
    </div>
  );
};

export default Section;
