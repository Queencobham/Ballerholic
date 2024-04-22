import rectangle from "../assets/images/Rectangle.png"

const Partners = () => {
  return (
    <div className="partners">
      <p>Over 150,000 companies are building great apps with Nectar</p>
      <div className="partners-img">
        <img src={rectangle} alt="rectangle" />
        <img src={rectangle} alt="rectangle" />
        <img src={rectangle} alt="rectangle" />
        <img src={rectangle} alt="rectangle" />
        <img src={rectangle} alt="rectangle" />
        <img src={rectangle} alt="rectangle" />
      </div>
    </div>
  )
}

export default Partners
