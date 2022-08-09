
export function ImagenTipo(props) {
  return (
    <img
      src={props.url}
      width="50"
      height="50"
      alt="Imagen de tipo"
      className="imageType"
      title={props.title}
    />
  )
}
