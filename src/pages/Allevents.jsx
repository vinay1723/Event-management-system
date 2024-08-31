import Navigation from "../componets/Navigation";
import Button from "../componets/Button";
import Event from "../componets/Event";
import { useSelector } from "react-redux";
function Allevents() {
  const events = useSelector((state) => state.events.events);
  return (
    <div className="lg:flex gap-3  bg-green-300 h-full">
      <div className="w-full bg-slate-100">
        <div className="bg-slate-600 mt-5 h-[60px] mx-4 rounded-xl flex gap-5 justify-between px-5  items-center">
          <div>
            <lable className="text-slate-100">Search events</lable>
            <input
              type="text"
              placeholder="Search events"
              className="lg:w-[600px] lg:h-[45px] ml-20 rounded-full px-2 text-base outline-none"
            />
          </div>
          <div className="flex gap-4">
            <Button text={"category"} />
            <Button text={"filter by date"} />
          </div>
        </div>
        <div className="p-4 grid lg:grid-cols-4 gap-3 overflow-y-scroll lg:h-[80vh] justify-center bg-slate-100">
          {events &&
            events.map((event, i) => (
              <Event key={event._id} id={i} event={event} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Allevents;
