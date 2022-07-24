import React , {useState , useEffect , useRef} from 'react'
import { Overlay, Text , LandingDiv, Content, ContentH2, ContentSpan, ContentP } from './Landing.style'

const IMAGES = ['landing01.jpg' , 'landing02.jpg' , 'landing03.png']

function Landing() {
    const [image , setImage] = useState(IMAGES[0])
    const intervalRef = useRef(null)
    useEffect(()=>{
        intervalRef.current = setInterval(() =>{
            let randomIndex = Math.floor(Math.random() * IMAGES.length)
            setImage(IMAGES[randomIndex])
        }, 10000)
        return () =>{
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <LandingDiv style={{backgroundImage : `url(/Images/${image})`}}>
        <Overlay />
        <Text>
            <Content>
                <ContentH2>We are <ContentSpan>creative</ContentSpan> agency</ContentH2>
                <ContentP>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</ContentP>
            </Content>
        </Text>
    </LandingDiv>
  )
}

export default Landing