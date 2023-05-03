import { Table } from "react-bootstrap";

export default function Ip({
  server: { ip, status }
}) {
  return (
    <Table striped>
      <tbody>
        <tr>
            <td style={{textAlign: 'start' }}>{ip}</td>
            <td style={{textAlign: 'end' }}>{status}</td>
        </tr>
      </tbody>
    </Table>
  );
}