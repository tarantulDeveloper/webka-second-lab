import { FC } from "react";

interface TextIconProps {
  icon: JSX.Element;
  title: string;
}

const TextIcon: FC<TextIconProps> = ({ icon, title }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center flex-column  text-center">
      {icon}
      <h5 className="text-uppercase">{title}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
        dignissimos cumque ad id incidunt quia corrupti officiis. Illo ut
        laudantium modi consequatur dolores esse minima odit perferendis ab.
      </p>
    </div>
  );
};

export default TextIcon;
