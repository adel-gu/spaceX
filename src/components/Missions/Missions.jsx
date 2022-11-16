import React from 'react';
import './Missions.css';

function Missions() {
  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Mission Status</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td><button type="button">Join</button></td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td><button type="button">Join</button></td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td><button type="button">Join</button></td>
        </tr>
      </table>
    </div>
  );
}

export default Missions;
