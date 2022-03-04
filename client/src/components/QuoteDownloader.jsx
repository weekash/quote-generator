import React, { useState, useRef } from 'react';
import { ColorPicker, TextField, Button } from '@shopify/polaris';
import axios from "axios";
import FileDownload from "js-file-download";
import { useEffect } from 'react';
export default function QuoteDownloader() {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });

  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const previewRef = useRef(null);

  const colorChange = (color) => {
    setColor(color)
  }
  useEffect(()=>{
    setError('')
  },[color, quote])

  const callDownloadApi = () => {
    const textColor = `hsla(${hue},${saturation * 100}%,${brightness * 100}%,${alpha})`;
    setLoading(true);
    axios('/api/generate', {
      method: 'POST',
      data: { color: textColor, quote },
      responseType:'blob'
    }).then((res) => {
      console.log(res)
        FileDownload(res.data, 'quote.png')
    }).catch((err) => {
        setError(err.response?.data?.error || '')
    }).finally(() => {
        setLoading(false)
    })


  }

  const { hue, brightness, saturation, alpha } = color;
  const textColor = `hsla(${hue},${saturation * 100}%,${brightness * 100}%,${alpha})`;
  return <div className="quote-container">
    <h1 className="main-head">Quote Generator</h1>
    <p className='medium_text my_8'>Enter a quote</p>
    <TextField
      class='quote-input'
      autoComplete="off"
      value={quote}
      onChange={(e) => {
        setQuote(e)
      }}
      multiline
    />
    <p className='medium_text my_8'>Pick a color</p>
    <ColorPicker onChange={colorChange} color={color} allowAlpha />
    <h1 className='large_text'>Here you go</h1>
    <p className='my_8 danger small_text'>Note: Actual image will look slight different from it and will download in 1000px * 500px resolution. </p>
    <div className="preview" ref={previewRef}>
      <h1
        style={{
          color: textColor
        }}
      >
        {quote}
      </h1>
    </div>
    {error && <p className='my_8 danger small_text'>{error}</p>}

    <Button onClick={callDownloadApi} loading={loading}>Download Quote</Button>


  </div>

}
