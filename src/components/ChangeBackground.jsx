import React from 'react'

function ChangeBackground({data}) {
  return (
    <div>
        <video className={`background-video z-n1 sun ${data.weather[0].main === "Clear" ? "bg-display" : "bg-no-display"}`} id="sun" autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1496610463/video/light-leaks-and-lens-flare-on-grey-gradient.mp4?s=mp4-640x640-is&k=20&c=_X3DxZKj991L56oW_hyxcESi8nTx0ikL_zj2yJmPKEc=" type="video/mp4"/>
    </video>
    
    <video className={`background-video z-n1 rain ${data.weather[0].main === "Rain" ? "bg-display" : "bg-no-display"}`} id="rain" autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1397212151/video/thunder-and-rain-animation-on-cloudy-weather-background-loopable.mp4?s=mp4-640x640-is&k=20&c=A31PKCw5Whau1Auy_7LFRs8k1LjB2i5TTo4abHgR3s8=" type="video/mp4"/>
    </video>

    <video className={`background-video z-n1 clouds ${data.weather[0].main === "Clouds" ? "bg-display" : "bg-no-display"}`} id="clouds" autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1535126957/video/time-lapse-of-white-fluffy-cumulonimbus-clouds-forming-before-thunderstorm-on-summer-blue-sky.mp4?s=mp4-640x640-is&k=20&c=331tpi0kysZ5yzbGsk7_CovYdynyB4HotEyA0AB070c=" type="video/mp4"/>
    </video>

    <video className={`background-video z-n1 drizzle ${data.weather[0].main === "Drizzle" ? "bg-display" : "bg-no-display"}`} id="drizzle" autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1503688860/video/ld-raindrops-gliding-down-a-window.mp4?s=mp4-640x640-is&k=20&c=rBJaYjZ1N-cxTUkPy_DM_bMpNENAJxwZyfa-phOxeB8=" type="video/mp4"/>
    </video>
    </div>
  )
}

export default ChangeBackground