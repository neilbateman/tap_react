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
          <button onClick={() => {
            props.editKeg(keg)
          }} className="button muted-button">Edit</button>
          <button onClick={() => props.deleteKeg(keg.id)} className="button muted-button">Delete</button>
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
