const Game = props => {
  const {eachItem, renderClickingId} = props
  const {id, imageUrl} = eachItem
  const onClickingImg = () => {
    renderClickingId(id, imageUrl)
  }
  return (
    <button
      type="button"
      onClick={onClickingImg}
      data-testid={`${id.lowercase()}Button``}
    >
      <img src={imageUrl} alt={id} />
    </button>
  )
}

export default Game
