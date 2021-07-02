import "./widgetlarge.css";

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <span className="widgetLargeTitle">Latest transactions</span>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTableRow">
          <th className="widgetLargeTableHead">Customer</th>
          <th className="widgetLargeTableHead">Date</th>
          <th className="widgetLargeTableHead">Amount</th>
          <th className="widgetLargeTableHead">Status</th>
        </tr>
        <tr className="widgetLargeTableRow">
          <td className="widgetLargeUser">
            <img
              src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeName">John Doe</span>
          </td>
          <td className="widgetLargeDate">2 July 2021</td>
          <td className="widgetLargeAmount">$500</td>
          <td className="widgetLargeButton">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTableRow">
          <td className="widgetLargeUser">
            <img
              src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeName">John Doe</span>
          </td>
          <td className="widgetLargeDate">2 July 2021</td>
          <td className="widgetLargeAmount">$500</td>
          <td className="widgetLargeButton">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTableRow">
          <td className="widgetLargeUser">
            <img
              src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeName">John Doe</span>
          </td>
          <td className="widgetLargeDate">2 July 2021</td>
          <td className="widgetLargeAmount">$500</td>
          <td className="widgetLargeButton">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTableRow">
          <td className="widgetLargeUser">
            <img
              src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeName">John Doe</span>
          </td>
          <td className="widgetLargeDate">2 July 2021</td>
          <td className="widgetLargeAmount">$500</td>
          <td className="widgetLargeButton">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTableRow">
          <td className="widgetLargeUser">
            <img
              src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
              alt=""
              className="widgetLargeImage"
            />
            <span className="widgetLargeName">John Doe</span>
          </td>
          <td className="widgetLargeDate">2 July 2021</td>
          <td className="widgetLargeAmount">$500</td>
          <td className="widgetLargeButton">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
