import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [isClicked, setIsClicked] = useState<any>(false)
  const [isClicked2, setIsClicked2] = useState<any>(false)
  const [isSolved, setIsSolved] = useState<any>(false)

  const ref = useRef<any>(null)
  const ref2 = useRef<any>(null)

  const handleClick = () => {
    setIsClicked(true)
  }

  const handleClick2 = () => {
    setIsClicked2(true)
  }

  const onMouseRelease = () => {
    setIsClicked(false)
  }

  const onMouseRelease2 = () => {
    setIsClicked2(false)
  }

  const handleWindowTouchMove = (event: any) => {
    if(isClicked) {
      if(!isSolved){
        if((ref.current.getBoundingClientRect().x+ref.current.getBoundingClientRect().width) <= 
          ref2.current.getBoundingClientRect().x 
          || 
          ref2.current.getBoundingClientRect().y >= (ref.current.getBoundingClientRect().y + ref.current.getBoundingClientRect().height)
          ||
          ref2.current.getBoundingClientRect().y + ref2.current.getBoundingClientRect().height < ref.current.getBoundingClientRect().y

          ){
          ref.current.style.transform = `translate(${event.touches[0].clientX-150}px)`
        } 

        if(event.touches[0].clientX > 340){
          setIsSolved(true)
        }
      }
    }
  }
  const handleWindowMouseMove = (event: any) => {
    if(isClicked) {
      if(!isSolved){
        if((ref.current.getBoundingClientRect().x+ref.current.getBoundingClientRect().width) <= 
          ref2.current.getBoundingClientRect().x 
          || 
          ref2.current.getBoundingClientRect().y >= (ref.current.getBoundingClientRect().y + ref.current.getBoundingClientRect().height)
          ||
          ref2.current.getBoundingClientRect().y + ref2.current.getBoundingClientRect().height < ref.current.getBoundingClientRect().y
          ){
          ref.current.style.transform = `translate(${event.clientX-450}px)`
        } 
        if(ref.current.getBoundingClientRect().x > 540){
          setIsSolved(true)
        }
      }
    }
  }

  const handleWindowMouseMove2 = (event: any) => {
    if(isClicked2) {
      ref2.current.style.transform = `translateY(${event.clientY-450}px)`
    }
  }

  const handleWindowTouchMove2 = (event: any) => {
    if(isClicked2) {
      ref2.current.style.transform = `translateY(${event.touches[0].clientY-450}px)`
    }
  }

  useEffect(() => {

    if(isClicked) window.addEventListener('mousemove', handleWindowMouseMove);
    if(isClicked) window.addEventListener('touchmove', handleWindowTouchMove);
    if(isClicked2) window.addEventListener('mousemove', handleWindowMouseMove2);
    if(isClicked2) window.addEventListener('touchmove', handleWindowTouchMove2);

    return () => {
      console.log('removing')
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );

      window.removeEventListener(
        'touchmove',
        handleWindowTouchMove,
      );

      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove2,
      );

      window.removeEventListener(
        'touchmove',
        handleWindowTouchMove2,
      );
    };
  }, [isClicked, isClicked2, ref, ref2, isSolved])

  useEffect(() => {

  }, [isSolved])

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 style={{fontFamily: 'Tiny5'}}>versus energy innovations inc.</h1>
      <p>a one person dev team with the spirit of the community, aimed at competing against certain ‘algorithm’ heavy applications</p>
      <p>brings experience and empathy focused on contrasting paradigms to find cohesion via web dev designs, education, & networked computing</p>
      <p>some experience with:</p>
      <ul>
        <li>proof of concept AI voice application that seeded a business to double digit MM revenue</li>
        <li>business cases, workshops, & explainable AI strategy for series A startup whom raised $100MM</li>
        <li>land registry POC with united nations</li>
        <li>multi-verse gaming education</li>
        <li>fault tolerant p2p systems and/with offline based usb data ownership</li>
      </ul>
      {!isSolved && <p>upon completion of mini-game our contact info will be revealed </p>}
      {!isSolved ? <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <line x1="250" y1="47" x2="300" y2="47" style={{stroke: 'lightgrey', strokeWidth: 2}} />
        <line x1="250" y1="104" x2="300" y2="104" style={{stroke: 'lightgrey', strokeWidth: 2}} />
        <rect ref={ ref } onMouseUp={() => onMouseRelease()} onTouchEnd={()=>onMouseRelease()}onMouseDown={()=> handleClick()} onTouchStart={()=> handleClick()} width="100" height="50" x={'10'} y="50" rx="10" ry="10" fill="blue"/>
        <rect ref={ ref2 } onMouseUp={() => onMouseRelease2()} onTouchEnd={()=>onMouseRelease2()}onMouseDown={()=> handleClick2()} onTouchStart={()=>handleClick2()}width="50" height="100" x={'150'} y="50" rx="10" ry="10" fill="blue"/>
      </svg> : <a href="mailto:build@deep6.org">build@deep6.org</a>}
    </>
  )
}

export default App