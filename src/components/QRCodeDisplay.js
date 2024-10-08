import React from 'react'
import QRCode from 'qrcode.react'

const QRCodeDisplay = () => {
  return (
    <div>
      <h2>Scan to Join the Game</h2>
      <QRCode value="http://localhost:3000" size={256} />
    </div>
  )
}

export default QRCodeDisplay
