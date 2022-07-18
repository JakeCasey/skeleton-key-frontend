import gql from 'graphql-tag';
import { useQuery } from 'apollo-client';

let ClientList = ({ clients }) => {
  return (
    <div>
      {clients.map((client) => (
        <div>
          <p>{client.name}</p>
        </div>
      ))}
    </div>
  );
};

let MY_CLIENTS_QUERY = gql`
  query {
    myClients {
      id
      name
      destinationEmail
    }
  }
`;

// let CREATE_CLIENT_MUTATION = gql`
//   mutation ($name: String!, $destinationEmail: String!) {
//     id
//   }
// `;

let MyClients = () => {
  // Get my clients list.
  //   let { data, loading, error } = useQuery(MY_CLIENTS_QUERY);

  return (
    <div className="flex">
      <h1> My Clients</h1>
      <div>
        {/* {data.myClients?.length > 0 ? (
          <ClientList clients={clients} />
        ) : (
          <p> No clients...</p>
        )} */}
      </div>
    </div>
  );
};

export default MyClients;
