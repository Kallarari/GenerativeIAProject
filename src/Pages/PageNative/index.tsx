import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles.module";

const PageNative: React.FC = () => {
    const [loadTime, setLoadTime] = useState<string>();
    const renderStart = useRef<number>(performance.now());
    useEffect(() => {
      const renderEnd = performance.now();
      setLoadTime((renderEnd - renderStart.current).toFixed(2));
    }, []);
  const data = [
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <div style={{ display: "flex" }}>
        <select>
          <option value={1}>jack</option>
          <option value={1}>lucy</option>
          <option value={1}>Yiminghe</option>
        </select>
        <input type="checkbox" />
      </div>
      <table>
        <tbody>
          {data.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.age}</td>
              <td>{item.dataIndex}</td>
              <td>{item.key}</td>
              <td>
                {item.tags.map((tag) => (
                  <h3>{tag}</h3>
                ))}
              </td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>
        {loadTime !== null ? (
          <p>Time after rendering: {loadTime} ms</p>
        ) : (
          <p>Calculating...</p>
        )}
      </h2>
    </div>
  );
};

export default PageNative;
