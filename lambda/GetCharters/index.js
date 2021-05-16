const pg = require('pg');
const pool = new pg.Pool();

const getAllCharters = async () => {
    const client = await pool.connect();
    res = client.query('select * from charters');
    client.release();
    return res;
}

exports.handler = async (event) => {
    // Either return all charters (short form) or the details of a single charter

    let allCharters = null;    
    if (event && event.id) {
        allCharters = [{
            id: event.id,
            name: `Custom ${event.id}`,
            description: "This is a custom charter"
        }];
    } else {
        try {
            const response = await getAllCharters();
            allCharters = response.rows
        } catch(exc) {
            console.log(`Exception: ${exc.message}`);
            allCharters = [
                {
                    id: 1,
                    name: "Bogus 1",
                    description: "Half day inshore fishing trip"
                },
                {
                    id: 2,
                    name: "Inshore 2",
                    description: "Full day inshore fishing trip"
                }
            ];
        }
    }
    
    const response = {
        statusCode: 200,
        charters: allCharters,
    };
    return response;
};
