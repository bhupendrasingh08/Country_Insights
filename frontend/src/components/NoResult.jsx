import BookNavigation from "../assets/book-navigation.svg";

export default function NoResult() {
  return (
    <>
      <img
        src={BookNavigation}
        alt=""
        className="md:h-80 md:w-80 sm:h-72 sm:w-72 h-60 w-60 p-2"
      />
    </>
  );
}
