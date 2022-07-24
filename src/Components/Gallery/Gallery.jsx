import React ,{useState} from 'react'
import { Box, CloseButton, Container, Galleriys, Image, PopupBox, PopupOverlay } from './Gallery.style'
import MainTitle from '../MainTitle/MainTitle'
import { ImageData } from './ImageData'

const Gallery = () => {
  const [click , setClick] = useState(null)

  return (
    <Galleriys>
      <MainTitle text='Gallery' />
      <Container>
        {click &&
        (
          <>
            <PopupOverlay></PopupOverlay>
            <PopupBox>
              <h3>{click.alt}</h3>
              <img src={click.src} alt={click.alt} />
              <CloseButton onClick={() => setClick(null)}>X</CloseButton>
            </PopupBox>
          </>
        )}
        {ImageData.map((imge) => (
          <Box key={imge.id} onClick={() => setClick(imge)}>
            <Image>
              <img src={imge.src} alt={imge.alt} />
            </Image>
          </Box>
        ))}
      </Container>
    </Galleriys>
  )
}

export default Gallery