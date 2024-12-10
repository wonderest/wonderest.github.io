"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faHammer,
  faLink,
  faMapMarkerAlt,
  faServer,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBuffer, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js", { scope: "/" }); // hanya halaman "/" saja yang masuk cache
      // .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);
  const FieldSet = ({ children, title }) => {
    return (
      <fieldset className="border border-solid border-white box-border m-0">
        <legend className="text-[17px] font-bold ml-5">{title}</legend>
        {children}
      </fieldset>
    );
  };
  return (
    <>
      <div className="flex-col">
        <div className="w-72">
          <h1 className="text-[28px] text-center font-black">Profile</h1>
          <div className="text-center">Learning</div>
          <FieldSet title={"About Me"}>
            <ul className="list-none p-0 mr-3">
              <li>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="w-[19px] text-center px-3"
                />
                Rizky Maulana Akbar
              </li>
              <li className="mb-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-[19px] text-center px-3"
                />
                Jawa Timur, Indonesia
              </li>
            </ul>
          </FieldSet>
          <FieldSet title={"Skills"}>
            <ul className="list-none p-0 m-0">
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className="w-[19px] text-center px-3"
                />
                Javascript, Python
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faBuffer}
                  className="w-[19px] text-center px-3"
                />
                NextJS, Django
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="w-[19px] text-center px-3"
                />
                MongoDB, PostgreSQL
              </li>
              <li className="mb-2">
                <FontAwesomeIcon
                  icon={faServer}
                  className="w-[19px] text-center px-3"
                />
                AWS, Firebase
              </li>
            </ul>
          </FieldSet>
          <FieldSet title={"Links"}>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[19px] text-center px-3"
                />
                <a
                  href="https://www.instagram.com/wonderestt"
                  className="text-salmon border-b border-dashed border-dotRed no-underline"
                >
                  wonderestt
                </a>
              </li>
            </ul>
          </FieldSet>
        </div>
        {/* <div className="pt-[15px]"> */}
        {/*   <h1 className="text-[28px] m-0 text-center font-black">Portofolio</h1> */}
        {/*   <div className="text-center">Simmple Work</div> */}
        {/*   <FieldSet title={"Islam App"}> */}
        {/*     <ul className="list-none p-0 mr-3"> */}
        {/*       <li> */}
        {/*         <FontAwesomeIcon */}
        {/*           icon={faHammer} */}
        {/*           className="w-[19px] text-center px-3" */}
        {/*         /> */}
        {/*         ReactJS, Firebase */}
        {/*       </li> */}
        {/*       <li className="mb-2"> */}
        {/*         <FontAwesomeIcon */}
        {/*           icon={faLink} */}
        {/*           className="w-[19px] text-center px-3" */}
        {/*         /> */}
        {/*         <a */}
        {/*           href="https://islamapp.web.app" */}
        {/*           className="text-salmon border-b border-dashed border-dotRed no-underline" */}
        {/*         > */}
        {/*           Islam App */}
        {/*         </a> */}
        {/*       </li> */}
        {/*     </ul> */}
        {/*   </FieldSet> */}
        {/* </div> */}
      </div>
    </>
  );
}
