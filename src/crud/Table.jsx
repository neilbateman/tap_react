import React from 'react'

const Table = props => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Brand</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.kegs.length > 0 ? (
      props.kegs.map(keg => (
        <tr key={keg.id}>
        <td>{keg.type}</td>
        <td>{keg.brand}</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
        </tr>
      ))
          ) : (
            <tr>
  <td colSpan={3}>No kegs</td>
  </tr>
    )}
    </tbody>
  </table>
)

export default Table
