import PropTypes from "prop-types";
import Download from "./icons/Download";

function ImageCard({ user, url, links }) {
  console.log(user);
  return (
    <>
      <div className="relative  block rounded-lg overflow-hidden">
        <img
          className="w-full"
          alt={"nada" || "photo_all"}
          src={url || "image-prueba.avif"}
        />
        <div
          className=" absolute bottom-0 w-full h-full  
          bg-gradient-radial opacity-0 hover:opacity-100   ease-in-out duration-300 group  "
        >
          <div className="absolute right-3 top-3 cursor-pointer">
            <a
              href={
                links
                  ? `${links.download}&force=true `
                  : "https://unsplash.com/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <Download />
            </a>
          </div>
          <div className=" absolute bottom-3-5 left-3-5 cursor-pointer">
            <div className="flex items-center gap-2 ">
              <div>
                <img
                  className="rounded-3xl"
                  alt="user-img"
                  src={user?.profile_image.small || "author.png"}
                  width="40"
                />
              </div>
              <div className=" text-sm leading-none font-normal text-white">
                <h3 className="capitalize">
                  {user?.name || "Leslie Alexander"}
                </h3>
                <p className="font-normal text-xs leading-none text-gray-200">
                  {user?.social.instagram_username ||
                    user?.twitter_username ||
                    user?.username ||
                    "Exclusive"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;

ImageCard.propTypes = {
  url: PropTypes.string.isRequired,
};
