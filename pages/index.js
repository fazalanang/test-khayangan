import { gql } from '@apollo/client';
import client from './client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Button, Form } from 'react-bootstrap';
import Edit from './component/edit';
import { useState } from 'react';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Server {
        servers {
          name
          status
          cpu
          memory
          storage
          uptime
          location {
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      servers: data.servers,
    },
  };
}
export default function Home({ servers }) {
  const [ isModal, setIsModal ] = useState (false)

  return (
    <Container>
      <Edit open={isModal} onClose={()=> setIsModal(false)}/>
      <h1>Front End</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status: Active | Down</th>
            <th>CPU</th>
            <th>Memory</th>
            <th>Storage</th>
            <th>Uptime</th>
            <th>Location</th>
            <th>Edit \ Delete</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((item, key) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.cpu}</td>
              <td>{item.memory}</td>
              <td>{item.storage}</td>
              <td>{item.uptime}</td>
              {item.location && <td>{item.location.name}</td>}
              <td>
                <button className='edit'onClick={() => setIsModal(true)}>Edit</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}