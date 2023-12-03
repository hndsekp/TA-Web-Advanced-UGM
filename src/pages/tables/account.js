import cx from 'clsx';
import { useState } from 'react';
import {ScrollArea, Table } from "@mantine/core";
import classes from './account.module.css';

const data = [
    {
        id: '1',
        username: 'admin',
        password: 'admin',
        role: 'admin',
    },
    {
        id: '2',
        username: 'ranu',
        password: 'sayasehat12',
        role: 'customer',
    },
    {
        id: '3',
        username: 'raph',
        password: 'raphaelzelig00',
        role: 'customer',
    },
]

export default function accountTables(){
    const [scrolled, setScrolled] = useState(false);
    const rows = data.map((row) => (
        <Table.Tr key={row.id}>
            <Table.Td>{row.id}</Table.Td>
            <Table.Td>{row.username}</Table.Td>
            <Table.Td>{row.password}</Table.Td>
            <Table.Td>{row.role}</Table.Td>
        </Table.Tr>
    ));
    return (
    <div className={classes.tableContainer}>
      <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>Id</Table.Th>
            <Table.Th>Username</Table.Th>
            <Table.Th>Password</Table.Th>
            <Table.Th>Role</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
    </div>
    );
}
