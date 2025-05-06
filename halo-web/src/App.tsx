import {useState} from 'react'
import './App.css'
import {burner} from "./Burner.tsx";

function App() {
    const [result, setResult] = useState('')
    const [hasData, setHasData] = useState(false)

    const burnerGetData = async () => {
        // Get information about Burner tag
        setHasData(false)
        setResult('')

        try {
            const data = await burner.getData()
            console.log('data', data)
            setResult(JSON.stringify(data, null, 4))
            setHasData(true)
        } catch (e) {
            setResult((e as Error).toString())
        }
    }

    const burnerGetUSD2Balance = async () => {
        setResult('')

        // Get information about Burner tag
        try {
            const balance = await burner.getUSD2Balance()
            console.log('balance', balance)
            setResult('USD2 balance: ' + balance)
        } catch (e) {
            setResult((e as Error).toString())
        }
    }

    const burnerSendUSD2 = async () => {
        setResult('')

        try {
            const data = await burner.getData()
            const password = prompt('Burner PIN code:')

            if (!password) {
                return
            }

            burner.setPassword(password.trim())

            await burner.sendUSD2({
                destinationAddress: data.address,
                amount: BigInt(1)
            })
        } catch (e) {
            setResult((e as Error).toString())
        }
    }

    return (
        <>
            <h1>LibBurner Web Demo</h1>
            <div className="card">
                <button onClick={() => burnerGetData()}>
                    Get Burner data
                </button>
                <button onClick={() => burnerGetUSD2Balance()} disabled={!hasData}>
                    Get USD2 balance
                </button>
                <button onClick={() => burnerSendUSD2()} disabled={!hasData}>
                    Send USD2
                </button>
                <pre style={{whiteSpace: 'pre-wrap'}}>
                    {result}
                </pre>
            </div>
        </>
    )
}

export default App
