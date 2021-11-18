import React from 'react'

function UserList({ users }) {
  return (
    <div className='container'>
        <h3>This is the list of users </h3>
      <table className="table"
       style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5%',
        marginButtom: '4%',
        borderStyle: 'solid',
        borderColor: '#F4EFEE',
      }}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">address:street</th>
            <th scope="col">suite</th>
            <th scope="col">city</th>
            <th scope="col">zipcode</th>
            <th scope="col">phone</th>
            <th scope="col">website</th>
            <th scope="col">company name</th>
            <th scope="col">company catchPhrase</th>
            <th scope="col">company bs</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>{user.company.catchPhrase}</td>
              <td>{user.company.bs}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default UserList
