import { Frame, PhotoOfTheNew, Data, Title, Description } from './styles.js'

const CardOFANew = ({ title = null, description = null, photo = null, url = null }) => {
  if (title != null && description != null && photo != null) {
    return (
      <Frame
        className='CardOFANew' data-testid='CardOFANew' onClick={() => {
          window.open(url, '_blank')
        }}
      >
        <PhotoOfTheNew
          data-testid='photoOfTheNew'
          src={photo}
          className='photoOfTheNew'
          alt='Photo Not Found'
        />
        <Data className='dataContainer'>
          <Title data-testid='titleOfTheNew' className='titleOfTheNew'>{title}</Title>
          <Description data-testid='descriptionOfTheNew' className='descriptionOfTheNew'>{CheckDescriptionLenght(description)}</Description>
        </Data>
      </Frame>
    )
  }
}
const CheckDescriptionLenght = (textToCut) => {
  if (textToCut.length > 50) {
    let textCut = textToCut.substring(0, 160)
    textCut += '...'
    return textCut
  }
  return textToCut
}
export default CardOFANew
