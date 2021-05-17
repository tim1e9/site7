import React from 'react';
import Typography from '@material-ui/core/Typography';

import authService from '../../services/authService';
import charterService from '../../services/chartersService';
 
export default function Welcome() {
    // eslint-disable-next-line
    const [chartersResp, setChartersResp] = React.useState([]);

    React.useEffect( () => {
      const token = authService.getAccessToken();
      charterService.setAccessToken(token);
      async function fetchData() {
        const result = charterService.getAllCharters();
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
