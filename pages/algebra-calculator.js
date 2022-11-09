import Head from 'next/head';


export default function CalculatorPage() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div class="basic-calculator">
                <h1>Algebra Calculator</h1>
                <form action="/api/calculator" method="POST">
                    equation: <input type="text" name="input" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>

        </div>

    );
}