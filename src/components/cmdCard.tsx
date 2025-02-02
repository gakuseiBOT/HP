import { JSX } from "react";

type CmdCardProps = {
  title: string;
  description: string;
  isRunning?: boolean;
  args?: arg[];
};
type arg = {
  name: string;
  description: string;
};

const runningStyle = "bg-white";
const disableStyle = "bg-gray-200";

export default function CmdCard({ title, description, isRunning, args }: CmdCardProps) {
  const argElements = new Array<JSX.Element>();
  args?.forEach((arg) => {
    argElements.push(
      <div
        className="flex items-center justify-between"
        key={arg.name}
      >
        <div className="flex items-center">
          <div className="">
            <h2 className="text-md font-semibold text-gray-800">{arg.name}</h2>
            <p className="text-sm text-gray-500">{arg.description}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div
      className={`${isRunning ? runningStyle : disableStyle} text-black shadow-lg rounded-lg p-4`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="">
            <h2 className="text-xl font-semibold text-gray-800">
              /{title}
              {isRunning ? "" : "(停止中)"}
            </h2>
            <p className="text-sm text-gray-500">{description}</p>
            {argElements}
          </div>
        </div>
      </div>
    </div>
  );
}
