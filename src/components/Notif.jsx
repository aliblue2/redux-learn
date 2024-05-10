import { useSelector } from "react-redux";

const Notif = () => {
  const notif = useSelector((state) => state.notif.notifState);
  console.log(notif);
  if (notif === null) {
    return null;
  }
  return (
    <div
      className={
        notif.status === "pending"
          ? "bg-yellow-500 p-2  flex justify-between items-center w-full text-bgColor"
          : notif.status === "success"
          ? "bg-primaryColor p-2 flex justify-between items-center w-full text-bgColor"
          : "bg-red-500 p-2 flex justify-between items-center w-full text-bgColor"
      }
    >
      <h5 className="text-2xl font-medium">{notif.title}</h5>
      <p>{notif.message}</p>
    </div>
  );
};

export default Notif;
