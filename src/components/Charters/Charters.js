import React from 'react';
import Typography from '@material-ui/core/Typography';

import authService from '../../services/authService'
import {setAccessToken, getAllCharters} from '../../services/chartersService'

export default function Welcome() {
    const [chartersResp, setChartersResp] = React.useState([]);

    React.useEffect( () => {
      const token = authService.getAccessToken();
      setAccessToken(token);
      async function fetchData() {
        const result = getAllCharters();
        setChartersResp(result);
        console.log("RESULT: " + JSON.stringify(result));
        }
      fetchData();
    }, [setChartersResp])

    return(
        <div>
          <Typography variant="h4">
            Charters for you!
          </Typography>
        </div>
    );
}
