// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        const equation = req.body.input;
        const result = solveEquation(equation);
        res.status(200).json({ result: result });
    } else {
        // return error
        res.status(400).json({ error: 'Invalid request' });
    }
}

function solveEquation(equation) {
    var result = equation + " IS SOLVED";
    return result;
}

