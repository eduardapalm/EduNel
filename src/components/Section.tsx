const Section = (props: ISectionProps) => {
  const { id, className, children } = props;
  return (
    <div id={id} className={`${className} p-10 flex flex-col items-center`}>
      {children}
    </div>
  );
};

export default Section;
