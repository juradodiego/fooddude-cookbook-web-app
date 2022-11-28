import {
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useState } from "react";

export default function RecipeFilter() {
  const [qualityDropdownActive, setQualityDropdownActive] = useState(false);
  const [qualityDropdownText, setQualityDropdownText] =
    useState("Quality Rating");

  const [difficultyDropdownActive, setDifficultyDropdownActive] =
    useState(false);
  const [difficultyDropdownText, setDifficultyDropdownText] =
    useState("Difficulty Rating");

  const dropdownChangeHandler = (
    target: EventTarget,
    prefix: string,
    stateChangeHandler: Dispatch<SetStateAction<string>>,
    dropdownCollapseHandler: Dispatch<SetStateAction<boolean>>
  ) => {
    stateChangeHandler(prefix + target.innerHTML);
    dropdownCollapseHandler(false);
  };

  const difficultyDropdownHandler = (target: EventTarget) => {
    dropdownChangeHandler(
      target,
      "Difficulty Rating: ",
      setDifficultyDropdownText,
      setDifficultyDropdownActive
    );
  };

  const qualityDropdownHandler = (target: EventTarget) => {
    dropdownChangeHandler(
      target,
      "Quality Rating: ",
      setQualityDropdownText,
      setQualityDropdownActive
    );
  };

  return (
    <div className="rounded-md focus-within:shadow-md p-5 bg-white flex flex-col">
      <div className="flex bg-gray-200 rounded-lg h-10 w-[22rem] space-x-2">
        <MagnifyingGlassIcon className="ml-2 my-auto h-5 text-gray-700" />
        <input
          className="flex-grow rounded-lg focus:outline-none text-gray-800 bg-gray-200"
          type="text"
          placeholder="Ingredients (ex. Sugar, Flour)"
        />
      </div>
      <div className="flex bg-gray-200 rounded-lg h-10 w-[22rem] space-x-2 mt-2">
        <MagnifyingGlassIcon className="ml-2 my-auto h-5 text-gray-700" />
        <input
          className="flex-grow rounded-lg focus:outline-none text-gray-800 bg-gray-200"
          type="text"
          placeholder="Appliances (ex. Oven, Electric mixer)"
        />
      </div>
      <div className="flex">
        <div className="flex flex-col mt-2 select-none mr-auto">
          <div
            className="cursor-pointer flex h-8 rounded-md border border-gray-300 ml-auto items-center px-2 py-1 text-gray-700 text-sm"
            onClick={(e) =>
              setDifficultyDropdownActive(!difficultyDropdownActive)
            }
          >
            <p>{difficultyDropdownText}</p>
            <ChevronDownIcon className="text-gray-700 h-5" />
          </div>
          <div
            className={`absolute top-[15.5rem] ${
              difficultyDropdownText == "Difficulty Rating"
                ? "left-[7.5rem]"
                : "left-[9rem]"
            } bg-white rounded-md z-10 border border-gray-300 shadow-md flex flex-col px-5 space-y-2 py-2 mt-2 ${
              !difficultyDropdownActive && "hidden"
            }`}
          >
            <p
              className="rating-dropdown-item"
              onClick={(e) => difficultyDropdownHandler(e.target)}
            >
              0+
            </p>
            <p
              className="rating-dropdown-item"
              onClick={(e) => difficultyDropdownHandler(e.target)}
            >
              1+
            </p>
            <p
              className="rating-dropdown-item"
              onClick={(e) => difficultyDropdownHandler(e.target)}
            >
              2+
            </p>
            <p
              className="rating-dropdown-item"
              onClick={(e) => difficultyDropdownHandler(e.target)}
            >
              3+
            </p>
            <p
              className="rating-dropdown-item"
              onClick={(e) => difficultyDropdownHandler(e.target)}
            >
              4+
            </p>
            <p
              className="rating-dropdown-item mx-auto"
              onClick={(e) => difficultyDropdownHandler(e.target)}
            >
              5
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-2 select-none ml-auto">
          <div
            className="cursor-pointer flex h-8 rounded-md border border-gray-300 ml-auto items-center px-2 py-1 text-gray-700 text-sm"
            onClick={(e) => setQualityDropdownActive(!qualityDropdownActive)}
          >
            <p>{qualityDropdownText}</p>
            <ChevronDownIcon className="text-gray-700 h-5" />
          </div>
          <div
            className={`absolute top-[15.5rem] left-[20.5rem] bg-white rounded-md z-10 border border-gray-300 shadow-md flex flex-col px-5 space-y-2 py-2 mt-2 ${
              !qualityDropdownActive && "hidden"
            }`}
          >
            <p
              className="rating-dropdown-item"
              onClick={(e) => qualityDropdownHandler(e.target)}
            >
              0+
            </p>
            <p
              className="rating-dropdown-item"
              onClick={(e) => qualityDropdownHandler(e.target)}
            >
              1+
            </p>
            <p
              className="rating-dropdown-item"
              onClick={(e) => qualityDropdownHandler(e.target)}
            >
              2+
            </p>
            <p
              className="rating-dropdown-item"
              onClick={(e) => qualityDropdownHandler(e.target)}
            >
              3+
            </p>
            <p
              className="rating-dropdown-item"
              onClick={(e) => qualityDropdownHandler(e.target)}
            >
              4+
            </p>
            <p
              className="rating-dropdown-item mx-auto"
              onClick={(e) => qualityDropdownHandler(e.target)}
            >
              5
            </p>
          </div>
        </div>
      </div>
      <div className="h-10 w-10 rounded-full cursor-pointer ml-auto mt-auto items-center justify-center hover:bg-gray-300 flex active:bg-gray-400">
        <ChevronDoubleRightIcon className="h-5" />
      </div>
    </div>
  );
}