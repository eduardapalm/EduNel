const Section = (props: ISectionProps) => {
  const { id, className, children } = props;
  return (
    <div
      id={id}
      className={`${className} relative container py-10
        lg:py-16
        xl:py-20 flex flex-col items-center`}
    >
      {children}
    </div>
  );
};

export default Section;
