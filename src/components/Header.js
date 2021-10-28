import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  EyeOffIcon,
  PhotographIcon,
  ShieldExclamationIcon,
  StarIcon,
} from "@heroicons/react/outline";
export const Header = () => {
  return (
    <div className=" h-24 flex justify-between items-center border-solid border-gray-200 border-b-2 relative">
      <h1 className="text-3xl leading-8 tracking-tight font-extrabold text-blue-500 ">
        <PhotographIcon className="w-14" />
      </h1>
      <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="flex gap-10 text-gray-500 text-base leading-6 font-medium">
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Docs</li>
          <li className="">
            <Menu as="div">
              <Menu.Button>
                <div className="flex items-center ">
                  <span>More</span>{" "}
                  <ChevronDownIcon className="w-5 text-gray-400 " />
                </div>
              </Menu.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className="relative"
              >
                <div className="absolute flex flex-col  -left-40 top-3 p-5 justify-center text-blue-600 bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
                  <Menu.Items as="ul">
                    <Menu.Item as="li">
                      {({ active }) => (
                        <div
                          className={`${active && "bg-gray-50"} p-3 rounded-lg`}
                        >
                          <Link to="/gift/panda">
                            <div className="flex gap-4">
                              <div className="mt-1">
                                <StarIcon className="w-6 h-6" />
                              </div>
                              <div className="w-78">
                                <bold className="text-base leading-6 font-medium text-gray-900 ">
                                  Favorites
                                </bold>
                                <p className="text-sm leading-5 font-normal text-gray-500">
                                  Look up the Favorite Image and share with your
                                  friends
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item as="li">
                      {({ active }) => (
                        <div
                          className={`${active && "bg-gray-50"} p-3 rounded-lg`}
                        >
                          <Link to="/gift/panda">
                            <div className="flex gap-4">
                              <div className="mt-1">
                                <EyeOffIcon className="w-6 h-6" />
                              </div>
                              <div className="w-78">
                                <bold className="text-base leading-6 font-medium text-gray-900 ">
                                  Mature Content
                                </bold>
                                <p className="text-sm leading-5 font-normal text-gray-500">
                                  Hey this option only for Adults, the Api
                                  Unsplash and We are not responsability of the
                                  Images
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item as="li">
                      {({ active }) => (
                        <div
                          className={`${active && "bg-gray-50"} p-3 rounded-lg`}
                        >
                          <Link to="/gift/panda">
                            <div className="flex gap-4">
                              <div className="mt-1">
                                <ShieldExclamationIcon className="w-6 h-6" />
                              </div>
                              <div className="w-78">
                                <bold className="text-base leading-6 font-medium text-gray-900 ">
                                  Copyright
                                </bold>
                                <p className="text-sm leading-5 font-normal text-gray-500">
                                  If you want to use any of the images in this
                                  application, you must add the autor's tag.
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                    </Menu.Item>

                    <Menu.Item as="li" disabled>
                      <div className="p-3">
                        <span className="opacity-75">
                          Invite a friend (coming soon!)
                        </span>
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </div>
              </Transition>
            </Menu>
          </li>
        </ul>
      </nav>
      <div className="flex gap-8 items-center ">
        <span className="text-gray-500 text-base leading-6 font-medium">
          <Link>Sign in</Link>
        </span>
        <button className="py-2 px-4  text-base leading-6 font-medium bg-blue-500 text-white rounded-md">
          <Link>Sign up</Link>
        </button>
      </div>
    </div>
  );
};
