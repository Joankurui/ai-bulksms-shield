import React, {useState} from 'react';
import { analyzeSMS } from './services/api';

export default function App() {
  const [text,setText] = useState('');
  const [resp,setResp] = useState(null);

  const onAnalyze = async () => {
    const r = await analyzeSMS({ text, sender: 'unknown' });
    setResp(r);
  };

  return (
    <div style={{padding:20}}>
      <h2>AI BulkSMS Shield — Demo</h2>
      <textarea rows={6} cols={60} value={text} onChange={e=>setText(e.target.value)} />
      <br/>
      <button onClick={onAnalyze}>Analyze</button>
      {resp && <pre>{JSON.stringify(resp,null,2)}</pre>}
    </div>
  );
}
