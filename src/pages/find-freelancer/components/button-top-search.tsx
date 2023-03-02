import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface ButtonTopSreachProps {
  configsButtonTop: string[];
  buttonTop: string;
  SetButtonTop: Dispatch<SetStateAction<string>>;
}

export const ButtonTopSearch: React.FC<ButtonTopSreachProps> = ({
  SetButtonTop,
  buttonTop,
  configsButtonTop,
}) => {
  const { t } = useTranslation("jobs-online");

  return (
    <div className="grid grid-cols-4">
      {configsButtonTop.map((item) => (
        <button
          onClick={() => SetButtonTop(item)}
          className={`py-4 bg-gray-200 border-gray-300 border-x hover:bg-blue-500 hover:text-white duration-200 ${
            buttonTop === item && "bg-blue-500 text-white"
          }`}
        >
          {t(item)}
        </button>
      ))}
    </div>
  );
};
