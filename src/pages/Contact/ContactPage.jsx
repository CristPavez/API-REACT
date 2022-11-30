import React, { useEffect, useState } from "react";
import getContact from "../../api/apiContact";
import "../../styles/contact/contact.css";

export function ContactPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getContact();
      setData(resp);
      console.log(resp);
      return resp;
    }
    showData();
  }, []);

  return (
    <div className="layoutpage custom">
      <div className="contactpage">
        {data.map((person) => (
          <div key={person.id.value}>
            <img src={person.picture.large} alt="" srcset="" />
            <p>
              {person.name.first} {person.name.last}
            </p>
            <p>{person.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
