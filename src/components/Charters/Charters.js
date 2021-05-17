import React from 'react';
import authService from '../../services/authService';
import charterService from '../../services/chartersService';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 700
  },
});

export default function Welcome() {

  const classes = useStyles();
    const [chartersResp, setChartersResp] = React.useState(null);

    React.useEffect( () => {
      const token = authService.getAccessToken();
      charterService.setAccessToken(token);
      async function fetchData() {
        const result = await charterService.getAllCharters();
        setChartersResp(result.data.body);
        }
      fetchData();
    }, [setChartersResp])

    return(
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chartersResp && chartersResp.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.descr}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
}
