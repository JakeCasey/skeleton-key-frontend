import gql from 'graphql-tag';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

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

let CREATE_CLIENT_MUTATION = gql`
  mutation ($name: String!, $destinationEmail: String!) {
    id
  }
`;

let MyClients = () => {
  // Get my clients list.
  let { data, loading, error } = useQuery(MY_CLIENTS_QUERY);

  // Show loading screen.
  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col px-10 py-10">
      <h1> My Clients</h1>
      <div>
        {data?.myClients.length > 0 ? (
          <div>
            <ClientList clients={clients} />
          </div>
        ) : (
          <p className="mt-3"> No clients...</p>
        )}

        <CreateClient />
      </div>
    </div>
  );
};

let CreateClient = () => {
  let [name, updateName] = useState('');
  let [destinationEmail, updateDestinationEmail] = useState('');
  let [createClient, { error, data, loading }] = useMutation(
    CREATE_CLIENT_MUTATION
  );

  let submitCreateClient = () => {
    createClient({ variables: { name, destinationEmail } });
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="mt-2 ds-input"
        placeholder="Name"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        className="mt-2 ds-input"
        type="text"
        placeholder="Comma separated email addresses, eg: email1, email2"
        value={destinationEmail}
        onChange={(e) => updateDestinationEmail(e.target.value)}
      />
      <button
        className="px-4 py-3 mt-2 font-bold text-white rounded bg-navy"
        onClick={() => submitCreateClient()}
      >
        Create Client
      </button>
    </div>
  );
};

export default MyClients;
