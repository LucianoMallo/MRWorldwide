import { Frame, PhotoOfTheNew, Data, Title, Description } from './styles.js'

const CardOFANew = ({ title = null, description = null, photo = null }) => {
  if (title != null && description != null && photo != null) {
    return (
      <Frame className='CardOFANew' data-testid='CardOFANew'>
        <PhotoOfTheNew
          data-testid='photoOfTheNew'
          src={photo}
          className='photoOfTheNew'
          alt='photoOfTheNew'
        />
        <Data className='dataContainer'>
          <Title data-testid='titleOfTheNew' className='titleOfTheNew'>{title}</Title>
          <Description data-testid='descriptionOfTheNew' className='descriptionOfTheNew'>{description}</Description>
        </Data>
      </Frame>
    )
  }
}

export default CardOFANew
