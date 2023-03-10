import React from "react";

export const CalendarIcon = ({selected}) => {
     return (
          <svg
               width="24"
               height="25"
               viewBox="0 0 24 25"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <path
                    d="M3 18.3C3 19.83 4.17 21 5.7 21H18.3C19.83 21 21 19.83 21 18.3V11.1H3V18.3ZM18.3 4.8H16.5V3.9C16.5 3.36 16.14 3 15.6 3C15.06 3 14.7 3.36 14.7 3.9V4.8H9.3V3.9C9.3 3.36 8.94 3 8.4 3C7.86 3 7.5 3.36 7.5 3.9V4.8H5.7C4.17 4.8 3 5.97 3 7.5V9.3H21V7.5C21 5.97 19.83 4.8 18.3 4.8Z"
                    fill={selected ? "#1F419D" :"#AFAFAF"}
               />
          </svg>
     );
};

export default CalendarIcon