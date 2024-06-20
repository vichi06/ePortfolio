import { useState } from "react";

import "./index.css";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

const education = [
  {
    name: "Collège Internationnal de Valbonne",
    diploma: "Brevet mention très bien",
    range: {
      from: { year: 2011, month: 9, day: 1 },
      to: { year: 2015, month: 9, day: 1 },
    },
  },
];

function Education() {
  const [index, setIndex] = useState(0);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: { year: 2011, month: 9, day: 1 },
    to: { year: 2015, month: 9, day: 1 },
  });

  return (
    <div className="Education">
      <Calendar
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        shouldHighlightWeekends
        renderFooter={() => (
          <div className="Education-footer">
            <p>{education[index].name}</p>
            <p>{education[index].diploma}</p>
          </div>
        )}
      />
    </div>
  );
}

export default Education;
