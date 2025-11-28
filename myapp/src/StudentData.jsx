import React, { useState, useEffect } from "react";

export default function StudentData() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // example: dummy data
    setStudents([{ name: "Alice" }, { name: "Bob" }]);
  }, []);

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
